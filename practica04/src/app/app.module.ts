import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PadreComponent } from './viewChildPH/padre/padre.component';
import { HijoComponent } from './viewChildPH/hijo/hijo.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    JugadoresComponent,
    PadreComponent,
    HijoComponent,
    AutenticacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
