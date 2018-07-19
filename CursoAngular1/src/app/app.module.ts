/*  importaciones que hace la aplicacion de los modulos de angular */ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* importa los componentes creados */
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { EjemplometodoComponent } from './ejemplometodo/ejemplometodo.component';
import { EjemplopropertybindingComponent } from './ejemplopropertybinding/ejemplopropertybinding.component';
import { EjemploeventbindingComponent } from './ejemploeventbinding/ejemploeventbinding.component';

/* para el componente */
@NgModule({

  /* se declaran los componentes */
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodelComponent,
    EjemplometodoComponent,
    EjemplopropertybindingComponent,
    EjemploeventbindingComponent
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
