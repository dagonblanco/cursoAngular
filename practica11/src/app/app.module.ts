import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { EditarFacturaComponent } from './facturas/editar-factura/editar-factura.component';

const rutasApp: Routes = [
  {path: '', component: ListadoFacturasComponent},
  {path: 'crear-factura', component: CrearFacturaComponent},
  {path: 'editar-factura/:id', component: EditarFacturaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CrearFacturaComponent,
    ListadoFacturasComponent,
    EditarFacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutasApp),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
