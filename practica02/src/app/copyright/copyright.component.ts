import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<br>
  <p> &copy; 2018 Santander Global Tech S.A. </p>`,
  styles: ['p {color:grey;}']
}) // template  y estilos 'inline', en este propio archivo, elimina la necesidad de html y css separados
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
