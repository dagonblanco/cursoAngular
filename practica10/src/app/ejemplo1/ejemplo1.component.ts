import { Component, OnInit } from '@angular/core';
import { EmisorService } from '../emisor.service';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  mensajes;
  mensaje: string;
  alerta: string;

  constructor(private emisor: EmisorService) { }

  ngOnInit() {
    this.mensajes = this.emisor.getMensajes()
      .subscribe(
        (data: string) => {
          console.log(data);
          this.mensaje = data;
        },
        (error) => {
          console.error(error);
          this.alerta = error;
        },
        () => {
          console.log('Proceso completado');
          this.mensaje = 'Proceso completado';
        }
      );
  }

}
