import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { ListadoNominasComponent } from './empleados/listado-nominas/listado-nominas.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilidadesModule } from '../utilidades/utilidades.module';

const rutas: Routes = [
  {path: '', component: ListadoEmpleadosComponent},
  {path: 'listado-nominas', component: ListadoNominasComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    UtilidadesModule
  ],
  declarations: [ListadoEmpleadosComponent, ListadoNominasComponent]
})
export class RrhhModule { }
