import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: object = {};

  constructor() { }

  ngOnInit() {
  }

  crearCliente(formCliente:NgForm) {
    console.log(formCliente);
    this.cliente = {
      nombre: formCliente.controls.nombre.value,
      cif: formCliente.controls.cif.value,
      email: formCliente.controls.email.value,      
    }
  }
}
