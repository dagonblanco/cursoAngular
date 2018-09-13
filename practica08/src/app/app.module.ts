import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { CargaSuaveDirective } from './directivas/carga-suave.directive';

const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listado-clientes', component: ListadoClientesComponent, data: { titulo: 'Listado de Clientes' } },
  { path: 'ver-cliente/:id', component: VerClienteComponent },
  { path: '**', component: InicioComponent } //Siempre al final!
];

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
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
