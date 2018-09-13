import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  textoPadre:string;
  @ViewChild(HijoComponent) hijo:HijoComponent;

  constructor() { }

  ngOnInit() {
    //this.textoPadre = this.hijo.texto; // Undefined, el hijo aún no está creado!
  }

  ngAfterViewInit(){
    this.textoPadre=this.hijo.texto;
    console.log('Cargado padre con texto: ' + this.textoPadre);
  }

}
