import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../cif.validator';
import { FacturasService } from '../../servicios/facturas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensajesService } from '../../servicios/mensajes.service';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {

  formFra: FormGroup;
  factura: any;
  _id:string;
  error:string;

  constructor(private facturaService: FacturasService, private router: Router, private mensajesService:MensajesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    this.facturaService.getFacturaById(this._id).subscribe(
      (res)=>{ //ok
        this.factura=res;
        this.formFra.get('nombre').setValue(this.factura.nombre);
        this.formFra.get('cif').setValue(this.factura.cif);
        this.formFra.get('numero').setValue(this.factura.numero);
        this.formFra.get('fecha').setValue(this.factura.fecha);
        this.formFra.get('base').setValue(this.factura.base);
        this.formFra.get('tipo').setValue(this.factura.tipo);
        this.formFra.controls.pago.get('vencimiento').setValue(this.factura.pago.vencimiento);
        this.formFra.controls.pago.get('formaPago').setValue(this.factura.pago.formaPago);
      },
      (error)=>this.error=error //error
    );
    this.formFra = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),  // Validators.pattern('expresión regular')
      cif: new FormControl('', [CifValidator.checkCif, Validators.minLength(9)]),
      numero: new FormControl(''),
      fecha: new FormControl(new Date().toISOString().slice(0,10)),
      base: new FormControl(null),
      tipo: new FormControl(0.21),
      iva: new FormControl(null),
      total: new FormControl(null),
      pago: new FormGroup({
        vencimiento: new FormControl(null),
        formaPago: new FormControl(null)
      })
    })
    this.cambios()
  }

  cambios(): void {
    this.formFra.valueChanges
      .subscribe(form => {
        this.formFra.get('iva').patchValue(form.base * form.tipo, { emitEvent: false });
        this.formFra.get('total').patchValue(this.formFra.get('base').value + this.formFra.get('iva').value, { emitEvent: false });
      })
  }

  actualizarFactura() {
    this.factura = {
      nombre: this.formFra.get('nombre').value,
      cif: this.formFra.get('cif').value,
      numero: this.formFra.get('numero').value,
      fecha: this.formFra.get('fecha').value,
      base: this.formFra.get('base').value,
      tipo: this.formFra.get('tipo').value,
      pago: this.formFra.get('pago').value,
      contabilizadoPor: 'Juan Pérez',
      fechaCont: new Date()
    }

    this.facturaService.putFactura(this._id,this.factura).subscribe(
      (res: any) => { //ok
        console.log("Update ok: " + JSON.stringify(this.factura));
        this.mensajesService.enviarMensaje("Actualización de factura OK: " + JSON.stringify(this.factura));
        this.router.navigate(['/']);
     }, 
      (res: any) => { //error
        console.log("Update error: " + JSON.stringify(this.factura.stringify()));
      } 

    );
  }

}
