import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmisorService } from '../emisor.service';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit, OnDestroy {

  mensaje: string;
  mensajes;

  constructor(private emisor: EmisorService) { }

  ngOnInit() {
      this.cargarPings();
  }

  cargarPings() {
    this.mensajes = this.emisor.getPings()
    .subscribe(
      (data: string) => {
        console.log(data);
        this.mensaje = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Proceso completado');
      }
    );
  }

  ngOnDestroy() {
    // this.mensajes.unsubscribe();
  }

}
