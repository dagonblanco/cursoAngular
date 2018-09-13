import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';

// import localeEs from '@angular/common/locales/es'
// register noseque

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [{provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
