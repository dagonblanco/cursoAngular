import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  hour: string;

  constructor() { }

  ngOnInit() {
  }

  updateHour() {
    const h = ('0' + new Date().getHours()).slice(-2);
    const m = ('0' + new Date().getMinutes()).slice(-2);
    const s = ('0' + new Date().getSeconds()).slice(-2);
    const l = ('0000' + new Date().getMilliseconds()).slice(-4);


    this.hour = h + ':' + m + ':' + s +':'+ l;

  }

}
