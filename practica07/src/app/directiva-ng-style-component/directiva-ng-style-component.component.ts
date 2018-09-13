import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style-component',
  templateUrl: './directiva-ng-style-component.component.html',
  styleUrls: ['./directiva-ng-style-component.component.css']
})
export class DirectivaNgStyleComponentComponent implements OnInit {

  color = 'black';
  constructor() { }

  ngOnInit() {
  }

}
