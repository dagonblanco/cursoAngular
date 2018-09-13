import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html',
  styleUrls: ['./directiva-ng-switch.component.css']
})
export class DirectivaNgSwitchComponent implements OnInit {

  jugadores = [
    {nombre: 'Magic Johnson', equipo: 'Lakers'},
    {nombre: 'Larry Bird', equipo: 'Celtics'},
    {nombre: 'Michael Jordan', equipo: 'Bulls'},
    {nombre: 'Nananana', equipo: 'Hornets'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
