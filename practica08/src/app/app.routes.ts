import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { ListadoClientesComponent } from "./clientes/listado-clientes/listado-clientes.component";
import { VerClienteComponent } from "./clientes/ver-cliente/ver-cliente.component";
import { AutenticacionGuard } from "./autenticacion.guard";
import { SinAutorizacionComponent } from "./sin-autorizacion/sin-autorizacion.component";


const rutas: Routes = [
    { path: '', component: InicioComponent },
    { path: 'sin-autorizacion', component: SinAutorizacionComponent},
    { path: 'listado-clientes', component: ListadoClientesComponent, data: { titulo: 'Listado de Clientes' } },
    { path: 'ver-cliente/:id', component: VerClienteComponent,canActivate:[AutenticacionGuard] },
    { path: 'recursos-humanos', loadChildren: './rrhh/rrhh.module#RrhhModule'},
    { path: '**', component: InicioComponent } //Siempre al final!
  ];

  export const rutas_app = RouterModule.forRoot(rutas);