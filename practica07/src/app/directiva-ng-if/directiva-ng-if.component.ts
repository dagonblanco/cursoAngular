import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.css']
})
export class DirectivaNgIfComponent implements OnInit {

  directorio = 'practica05';
  directorioCheck: string;
  capital: string;

  constructor() { }

  ngOnInit() {
  }

}
