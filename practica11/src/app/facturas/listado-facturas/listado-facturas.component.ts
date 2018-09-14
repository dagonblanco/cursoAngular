import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../servicios/facturas.service';
import { MensajesService } from '../../servicios/mensajes.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas: Array<any>;
  constructor(private facturasSvc: FacturasService, private mensajesSvc: MensajesService) { }

  ngOnInit() {
    this.cargarFacturas();
  }


  private cargarFacturas() {
    this.facturasSvc.getFacturas().subscribe((resp) => this.facturas = resp, //ok
      (error) => console.log(error));
  }

  private eliminarFactura(id) {
    this.facturasSvc.deleteFactura(id).subscribe(
      (resp) => {
        const mensaje = "Borrado con éxito: " + resp;
        console.log(mensaje);
        this.cargarFacturas();
        this.mensajesSvc.enviarMensaje(mensaje);
      }, //ok
      (error) => {
        console.log(error);
        this.mensajesSvc.enviarMensaje(error);
      }
    );
  }
}
