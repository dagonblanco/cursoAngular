import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  _id: number | string;
  cliente:any;

  constructor(private route: ActivatedRoute, private clientesService: ClientesService) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    this.cliente=this.clientesService.getCliente(this._id);
  }

}
