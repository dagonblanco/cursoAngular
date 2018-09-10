import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  player = {
    name: 'John',
    surname: 'McLane',
    yearOfBirth: 1965
  }
  constructor() { }

  ngOnInit() {
  }

  getAge() {
    return new Date().getFullYear() - this.player.yearOfBirth;
  }
}
