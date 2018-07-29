
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


// importaciones para formularios

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';


// se importan los paquetes de routing ( para las rutas )
import { Routes , RouterModule } from '@angular/router';

// importamos dependencias para peticiones http
import { HttpModule } from '@angular/http';


/*********************************************************************************************************/
/******************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES  *********************************/
/*********************************************************************************************************/

// componentes
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfacturasComponent } from './facturas/addfacturas/addfacturas.component';
import { EditfacturasComponent } from './facturas/editfacturas/editfacturas.component';


// servicios
import { FacturasService } from './servicios/facturas.service';
import { ProteccionderutasService } from '../servicios/proteccionderutas.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

// RUTAS
// creamos un array de constantes que contendra todas las rutas de la aplicacion
// canActivate : [ProteccionderutasService] : para proteger las rutas de la aplicacion
const rutas : Routes  = [

  // path : ruta
  // component : componente al que llama

  // RUTA DE LISTADO FACTURAS
  // la ruta 'inicio/facturas' llama al componente AddfacturasComponent
  { path : 'inicio/facturas' , component : FacturasComponent , canActivate : [ProteccionderutasService] } , 


  // RUTA DE AÑADIR FACTURAS
  // la ruta 'inicio/facturas/addfactura' llama al componente AddfacturasComponent
  { path : 'inicio/facturas/addfactura' , component : AddfacturasComponent , canActivate : [ProteccionderutasService] } , 


  // RUTA DE MODIFICAR FACTURAS
  // la ruta 'inicio/facturas/editfactura/:id' llama al componente AddfacturasComponent
  { path : 'inicio/facturas/editfactura/:id' , component : EditfacturasComponent , canActivate : [ProteccionderutasService] } , 

]

@NgModule({

  imports: [

    CommonModule,

    // añado la importacion de routing
    // se establece un array de rutas que va a emplear nuestra aplicacion para cargar en la pagina
    // diferentes componentes
    RouterModule.forRoot(rutas),

    // añadimos el componente Angular de Formularios
    //FormsModule,

    // añadimos el componente Angular de Formularios reactive
    ReactiveFormsModule,

    // añadimos el componente Angular de Formularios
    HttpModule

  ],

   // añadimos nuestros propios componentes
  declarations: [
      
    FacturasComponent,
    
    AddfacturasComponent,
    
    EditfacturasComponent,  
  
  ] ,

  // añadimos los servicios que creamos dentro del array
  providers: [ 

   FacturasService ,
   
   ProteccionderutasService 

  ],

})

export class FacturasModule { }
