import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// se importan los paquetes de routing
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// importamos el servicio
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddProveedoresComponent } from './proveedores/addproveedores/addproveedores.component';

// creamos un array de constantes que contendra todas las rutas de la aplicacion

const rutas : Routes  = [

  // RUTAS
  // path : ruta
  // component : componente al que llama

  // RUTA INICIO
  // la ruta '' llama al componente inicio
  { path : '' , component : InicioComponent } ,

  // RUTA PROVEEDORES ( LISTADO )
  // la ruta 'proveedores' llama al componente proveedores
  { path : 'proveedores' , component : ProveedoresComponent } , 

  // RUTA PROVEEDORES ( FORMULARIO )
  // la ruta 'proveedores' llama al componente proveedores
  { path : 'proveedores/addproveedores' , component :  AddProveedoresComponent} , 

  // PARA RUTAS QUE NO EXISTEN
  // path : '**'  --> para rutas que no existen 
  // la ruta '**' llama al componente inicio
  { path : '**' , component : InicioComponent }

]


@NgModule({

  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddProveedoresComponent
  ],

  imports: [

    BrowserModule,

    // metemos la importacion de routing
    // se establece un array de rutas que va a emplear nuestra aplicacion para cargar en la pagina
    // diferentes componentes

    RouterModule.forRoot(rutas)
    
  ],

  // se mete  el servicio dentro del array
  providers: [ProveedoresService],

  bootstrap: [AppComponent]

})

export class AppModule { }
