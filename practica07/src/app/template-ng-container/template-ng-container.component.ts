import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-container',
  templateUrl: './template-ng-container.component.html',
  styleUrls: ['./template-ng-container.component.css']
})
export class TemplateNgContainerComponent implements OnInit {

  paisSel: string;
  paisesEuropa: string[] = ['España', 'Francia', 'Portugal', 'Alemania', 'Holanda'];
  paisesAsia: string[] = ['Japon', 'China', 'Mongolia', 'Korea', 'Nepal'];
  europa = true;
  asia = false;


  constructor() { }

  cambiarCont() {
    this.europa = ! this.europa;
    this.asia = ! this.asia;
  }
  
  ngOnInit() {
  }

}
