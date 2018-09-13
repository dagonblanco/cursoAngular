import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<Cliente> = [
    {nombre: 'Iberdrola',cif:'A1234567'},
    {nombre: 'Gas Natural',cif:'A7654321'},
    {nombre: 'Telefónica',cif:'A1112221'},
  ]

  usuario: string;

  constructor() {
    this.usuario = 'Pedro';
   }

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  postCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }

}
