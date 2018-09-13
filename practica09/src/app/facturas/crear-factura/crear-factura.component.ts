import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CifValidator } from '../../cif.validator';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;
  factura: any;

  constructor() { }


  ngOnInit() {
    const currentDateISO = new Date().toISOString().slice(0, 10);

    this.formFactura = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cif: new FormControl('', [CifValidator.checkCif]),
      numeroFactura: new FormControl(''),
      fechaFactura: new FormControl(currentDateISO),
      iva: new FormControl(null),
      base: new FormControl(null),
      tipo: new FormControl(0.21),
      total: new FormControl(null),
      pago: new FormGroup({
        forma : new FormControl('PayPal'),
        periodicidad: new FormControl('Mensual')
      })
    })
    this.cambios();
  }

  crearFactura() {
    this.factura = this.formFactura.value;
    delete this.factura.total;
    this.factura.contabilizadoPor = 'David';
    console.log("Creada factura: " + JSON.stringify(this.factura, null, ' '));

  }

  cambios(): void {
    this.formFactura.valueChanges.subscribe(form => {
      this.formFactura.get('iva').patchValue(form.base * form.tipo, { emitEvent: false });
      this.formFactura.get('total').patchValue(form.base + this.formFactura.get('iva').value, { emitEvent: false });
    });

  }

}
