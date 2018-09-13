import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Array<any>;
  titulo: string;
  constructor(private clientesService: ClientesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    this.titulo = this.route.snapshot.data.titulo;
  }

  navTo(_id) {
    this.router.navigate(['/ver-cliente', _id], { skipLocationChange: true });
  }

}
