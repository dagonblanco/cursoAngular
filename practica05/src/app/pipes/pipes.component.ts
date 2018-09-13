import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  texto = 'ciudad de Madrid';
  id:string = '1';
  fecha = new Date();
  importe = 1242.5546;
  aciertos = .093344;

  constructor() { }

  ngOnInit() {
    this.id = '000'+this.id;
  }

}
