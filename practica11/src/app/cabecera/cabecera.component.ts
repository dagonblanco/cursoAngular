import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  mensaje:string;
  mostrado = false;

  constructor(private mensajeService:MensajesService) { }

  ngOnInit() {
    this.mensajeService.getMensajero().subscribe(
      (texto:any)=>{
        this.mostrado=true;
        this.mensaje=texto;
        setTimeout(() => {
          this.mostrado=false;
        }, 5000);
      },// ok
      (error:any)=>{this.mensaje='Error en la lectura de mensajes'}// error
    )
  }

}
