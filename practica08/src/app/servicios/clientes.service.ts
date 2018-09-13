import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientes: Array<any> = [
    {_id: 'asdfcbns', nombre: 'Iberdrola',cif:'A1234567'},
    {_id: 'dfgherty', nombre: 'Gas Natural',cif:'A7654321'},
    {_id: 'afdibdfb', nombre: 'Telefónica',cif:'A1112221'},
  ]

  constructor() { }

  getClientes(){
    return this.clientes;
  }

  getCliente(_id){
    const clienteSel = this.clientes.find(cliente => cliente._id ===_id);
    return clienteSel;
  }
}
