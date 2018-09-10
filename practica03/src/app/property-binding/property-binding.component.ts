import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagePath = 'assets/img/madrid.jpg';

  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.imagePath='assets/img/destiny.jpg',3000);
  }

}
