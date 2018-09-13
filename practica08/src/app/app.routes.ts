import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { ListadoClientesComponent } from "./clientes/listado-clientes/listado-clientes.component";
import { VerClienteComponent } from "./clientes/ver-cliente/ver-cliente.component";


const rutas: Routes = [
    { path: '', component: InicioComponent },
    { path: 'listado-clientes', component: ListadoClientesComponent, data: { titulo: 'Listado de Clientes' } },
    { path: 'ver-cliente/:id', component: VerClienteComponent },
    { path: '**', component: InicioComponent } //Siempre al final!
  ];

  export const rutas_app = RouterModule.forRoot(rutas);