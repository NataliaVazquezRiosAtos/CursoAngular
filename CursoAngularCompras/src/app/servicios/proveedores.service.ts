/*
 * IMPORTANTE! 
 * 
 * Al crear un servicio desde consola, acordarse de importar el servicio y meterlo en el array 
 * de providers del archivo 'app.module.ts'
 * 
 */

/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Injectable } from '@angular/core';

// para emplear metodo post
import { Headers , Http , Response } from '@angular/http';

//import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  // ATRIBUTOS

  // url para listar y añadir proveedores
  provURL = "https://cursoangularcompras.firebaseio.com/proveedores.json";

  // url para actualizar proveedores
  proURL = "https://cursoangularcompras.firebaseio.com/proveedores";


  // CONSTRUCTOR

  constructor( private http : Http ) { }

    // metodo para insertar objetos proveedores en la bbdd    
    postProveedor( proveedor : any ){

      const newpres = JSON.stringify( proveedor );

      const headers = new Headers({

        'Content-Type': 'application/json'

      });

      return this.http.post( this.provURL, newpres, { headers } )

        .pipe( map ( res => {

          console.log( res.json() );

          return res.json();

      }))

  }

  // metodo para listar los objetos proveedor de la bbdd
  getProveedores() {

    return this.http.get( this.provURL )

      .pipe ( map ( res => {  
        
        res.json(); 

      }))

  }

  // para actualizar un registro en la bbdd
  // primero lo recogemos 
  getProveedor( id$ : string ) {

    // url compuesta por la 'preURL' + id ( del objeto .json )
    // se compone : https://cursoangularcompras.firebaseio.com/proveedores/idDelObjeto.json    
     const url = `${this.proURL}/${id$}.json`;

     return this.http.get( url )

     .pipe ( map ( res => {  
        
        res.json(); 

      }))

  }

  // para actualizar un registro en la bbdd
  // despues lo actualizamos
  putProveedor( proveedor : any, id$ : string ){

    const newpre = JSON.stringify( proveedor );

    const headers = new Headers( {

      'Content-Type': 'application/json'

    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put( url, newpre, { headers } )

        .pipe(map ( res => {

          console.log(res.json());

          return res.json();

        }))  

  }

  // metodo para listar los objetos proveedor de la bbdd
  delProveedor ( id$ : string ) {

    const url = `${this.proURL}/${id$}.json`;

    return this.http.delete( url )
      .pipe ( map ( res => {  
            
            res.json(); 

          }))
  }
// metodo para buscador proveedor en bbdd
  getProveedoresSearch( busqueda : string ) {

    const url = `${ this.provURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;

    return this.http.get( url )

        .pipe ( map ( res => {  
        
        res.json(); 

      }))
      
  }

}  
