import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Planes } from './planes/planes';
import { Temperatura } from './temperatura/temperatura';
import { Usuario } from './usuario/usuario';

@NgModule({
  declarations: [
    App,
    Planes,
    Temperatura,
    Usuario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
