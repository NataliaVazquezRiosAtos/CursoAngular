/*  importaciones que hace la aplicacion de los modulos de angular */ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


/* importa los componentes creados */
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { EjemplometodoComponent } from './ejemplometodo/ejemplometodo.component';
import { EjemplopropertybindingComponent } from './ejemplopropertybinding/ejemplopropertybinding.component';
import { EjemploeventbindingComponent } from './ejemploeventbinding/ejemploeventbinding.component';
import { Ejemplo2waybindingComponent } from './ejemplo2waybinding/ejemplo2waybinding.component';
import { EjemplodirectivangifComponent } from './ejemplodirectivangif/ejemplodirectivangif.component';
import { EjemploifelseconmetodoComponent } from './ejemploifelseconmetodo/ejemploifelseconmetodo.component';
import { EjemplodirectivangstyleComponent } from './ejemplodirectivangstyle/ejemplodirectivangstyle.component';
import { EjemplodirectivangnclassComponent } from './ejemplodirectivangnclass/ejemplodirectivangnclass.component';
import { EjemplodirectivangnforComponent } from './ejemplodirectivangnfor/ejemplodirectivangnfor.component';

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
    EjemploeventbindingComponent,
    Ejemplo2waybindingComponent,
    EjemplodirectivangifComponent,
    EjemploifelseconmetodoComponent,
    EjemplodirectivangstyleComponent,
    EjemplodirectivangnclassComponent,
    EjemplodirectivangnforComponent
  ],

  /* importaciones de angular */ 
  imports: [
    BrowserModule,
    FormsModule
  ],

  /* servicios : para utilizarlos en todos los componentes */ 
  providers: [],

  /* el modulo se va a inicializar en el componente 'AppComponent' */ 
  bootstrap: [AppComponent]

})

/* se exporta la clase */
export class AppModule { }
