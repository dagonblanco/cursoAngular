import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  @Input() jugadores;
  @Input() equipo;
  @Output() canasta: EventEmitter<any> = new EventEmitter;
  topJugadores: any[];

  constructor() { }

  ngOnInit() {
    this.topJugadores = this.jugadores.slice(0);
  }

  setCanasta(puntos, nombre) {
    console.log(nombre + ' ha anotado ' + puntos + ' puntos!')
    this.canasta.emit({ puntos, nombre });
    this.topJugadores.sort((a,b)=>b.puntos-a.puntos);
  }
}
