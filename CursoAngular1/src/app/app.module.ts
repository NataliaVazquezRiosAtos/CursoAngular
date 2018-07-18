/*  importaciones que hace la aplicacion de los modulos de angular */ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* importa los componentes creados */
import { AppComponent } from './app.component';

/* para el componente */
@NgModule({

  /* se declaran los componentes */
  declarations: [
    AppComponent
  ],

  /* importaciones de angular */ 
  imports: [
    BrowserModule
  ],

  /* servicios : para utilizarlos en todos los componentes */ 
  providers: [],

  /* el modulo se va a inicializar en el componente 'AppComponent' */ 
  bootstrap: [AppComponent]

})

/* se exporta la clase */
export class AppModule { }
