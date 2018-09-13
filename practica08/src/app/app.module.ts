import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { CargaSuaveDirective } from './directivas/carga-suave.directive';
import { rutas_app } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ListadoClientesComponent,
    VerClienteComponent,
    CargaSuaveDirective
  ],
  imports: [
    BrowserModule,
    rutas_app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
