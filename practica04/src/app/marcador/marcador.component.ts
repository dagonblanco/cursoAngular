import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  locales: any[] = [
    { nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/img/thomas.png' },
    { nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/img/kuzma.png' },
    { nombre: 'Julius Randle', puntos: 0, imagen: 'assets/img/randle.png' },
    { nombre: 'Brandon Ingram', puntos: 0, imagen: 'assets/img/ingram.png' },
    { nombre: 'Brook Lopez', puntos: 0, imagen: 'assets/img/lopez.png' },
  ]

  visitantes: any[] = [
    { nombre: 'Kadem Allen', puntos: 0, imagen: 'assets/img/allen.png' },
    { nombre: 'Aaron Bynes', puntos: 0, imagen: 'assets/img/bynes.png' },
    { nombre: 'Jabari Bird', puntos: 0, imagen: 'assets/img/bird.png' },
    { nombre: 'Jaylen Brown', puntos: 0, imagen: 'assets/img/brown.png' },
    { nombre: 'Jonathan Gibson', puntos: 0, imagen: 'assets/img/gibson.png' },
  ]

  puntosLocales:number = 0;
  puntosVisitantes:number = 0;

  equipoLocal = 'lakers';
  equipoVisitante = 'celtics';

  constructor() { }

  ngOnInit() {
  }

  getCanastaLocal(event){
    this.puntosLocales += event.puntos;
    this.locales.forEach(jugador=> {
      if (jugador.nombre === event.nombre) {
        jugador.puntos += event.puntos;
      }
    });
  }

  getCanastaVisitante(event){
    this.puntosVisitantes += event.puntos;
    this.visitantes.forEach(jugador=> {
      if (jugador.nombre === event.nombre) {
        jugador.puntos += event.puntos;
      }
    });
  }

}
