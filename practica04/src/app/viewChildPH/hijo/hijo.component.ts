import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  texto: string;
  constructor() { }

  ngOnInit() {
    this.texto = 'Lorem ipsum dolor sit amet...';
  }

}
