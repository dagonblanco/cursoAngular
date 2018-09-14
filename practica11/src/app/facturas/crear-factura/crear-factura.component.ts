import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../cif.validator';
import { FacturasService } from '../../servicios/facturas.service';
import { Router } from '@angular/router';
import { MensajesService } from '../../servicios/mensajes.service';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFra: FormGroup;
  fechaActual = new Date();
  factura: any;

  constructor(private facturaService: FacturasService, private router: Router, private mensajesService:MensajesService) { }

  ngOnInit() {
    this.formFra = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),  // Validators.pattern('expresión regular')
      cif: new FormControl('', [CifValidator.checkCif, Validators.minLength(9)]),
      numero: new FormControl(''),
      fecha: new FormControl(null),
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

  crearFactura() {
    this.factura = {
      nombre: this.formFra.get('nombre').value,
      cif: this.formFra.get('cif').value,
      numero: this.formFra.get('numero').value,
      fecha: this.formFra.get('fecha').value,
      base: this.formFra.get('base').value,
      tipo: this.formFra.get('tipo').value,
      pago: this.formFra.get('pago').value,
      contabilizadoPor: 'Juan Pérez',
      fechaCont: this.fechaActual
    }

    this.facturaService.postFactura(this.factura).subscribe(
      (res: any) => { //ok
        console.log("Post ok: " + JSON.stringify(this.factura));
        this.mensajesService.enviarMensaje("Alta de factura OK: " + JSON.stringify(this.factura));
        this.router.navigate(['/']);
     }, 
      (res: any) => { //error
        console.log("Post error: " + JSON.stringify(this.factura.stringify()));
      } 

    );
  }

}
