import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControladorComponent } from './controlador/controlador.component';
import { SeguridadComponent } from './seguridad/seguridad.component';

@NgModule({
  declarations: [
    AppComponent,
    ControladorComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
