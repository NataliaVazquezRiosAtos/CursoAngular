
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// importaciones para formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// se importan los paquetes de routing ( para las rutas )
import { Routes , RouterModule } from '@angular/router';

// importamos dependencias para peticiones http
import { HttpModule } from '@angular/http';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';


/*********************************************************************************************************/
/**************************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES **************************/
/*********************************************************************************************************/

import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddProveedoresComponent } from './proveedores/addproveedores/addproveedores.component';
import { AddpresupuestosComponent } from './presupuestos/addpresupuestos/addpresupuestos.component';
import { PresupuestosService } from './servicios/presupuestos.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

// RUTAS
// creamos un array de constantes que contendra todas las rutas de la aplicacion
const rutas : Routes  = [

  // path : ruta
  // component : componente al que llama

  // RUTA INICIO
  // la ruta '' llama al componente InicioComponent
  { path : '' , component : InicioComponent } ,

  // RUTA DE LISTADO PROVEEDORES
  // la ruta 'proveedores' llama al componente ProveedoresComponent
  { path : 'proveedores' , component : ProveedoresComponent } , 

  // RUTA AÑADIR PROVEEDOR
  // la ruta 'proveedores/addproveedores' llama al componente AddProveedoresComponent
  { path : 'proveedores/addproveedores' , component :  AddProveedoresComponent} , 

  // RUTA LISTADO PRESUPUESTOS 
  // la ruta 'listpresupuestos' llama al componente PresupuestosComponent
  { path : 'listpresupuestos' , component :  PresupuestosComponent} , 

  // RUTA AÑADIR PRESUPUESTOS 
  // la ruta 'listpresupuestos/addpresupuestos' llama al componente AddpresupuestosComponent
  { path : 'listpresupuestos/addpresupuestos' , component :  AddpresupuestosComponent} , 

  // PARA RUTAS QUE NO EXISTEN
  // path : '**'  --> para rutas que no existen 
  // la ruta '**' llama al componente inicio
  { path : '**' , component : InicioComponent }

]


@NgModule({

  // añadimos nuestros propios componentes
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddProveedoresComponent,
    AddpresupuestosComponent,
    PresupuestosComponent
   
  ],

  // añadimos  componentes Angular  
  imports: [

    BrowserModule,

    // añado la importacion de routing
    // se establece un array de rutas que va a emplear nuestra aplicacion para cargar en la pagina
    // diferentes componentes
    RouterModule.forRoot(rutas),

    // añadimos el componente Angular de Formularios
    FormsModule,

    // añadimos el componente Angular de Formularios reactive
    ReactiveFormsModule,

    // añadimos el componente Angular de Formularios
    HttpModule
    
  ],

  // añadimos los servicios que creamos dentro del array
  providers: [ ProveedoresService , PresupuestosService ],

  bootstrap: [ AppComponent ]

})

export class AppModule { }
