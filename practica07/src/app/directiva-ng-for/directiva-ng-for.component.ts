import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  clientes: Array<any> = [
    {nombre: 'Iberdrola',cif:'A1234567'},
    {nombre: 'Gas Natural',cif:'A7654321'},
    {nombre: 'Telefónica',cif:'A1112221'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
