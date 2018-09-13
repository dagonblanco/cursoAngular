import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'practica08';
  user = { nombre: 'David', rol: 'user' };

  ngOnInit(): void {
    localStorage.setItem('user', JSON.stringify(this.user))
  }
}
