import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListadoClientesPage } from '../listado-clientes/listado-clientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  navToClientes() {
    this.navCtrl.push(ListadoClientesPage);
  }

}
