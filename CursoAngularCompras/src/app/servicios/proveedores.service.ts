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


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  // ATRIBUTOS

  // url para listar y añadir proveedores
  provsURL = "https://cursoangularcompras.firebaseio.com/proveedores.json";

  // url para actualizar proveedores
  provURL = "https://cursoangularcompras.firebaseio.com/proveedores";


  // CONSTRUCTOR
  constructor( private http : Http ) { }


  id : string ;
  // METODOS

  // metodo para insertar objetos proveedor en la bbdd
  postProveedor( proveedor: any ) {

    const newpres = JSON.stringify( proveedor );

    const headers = new Headers({

      'ContentType':'application/json'

    });

    return this.http.post( this.provsURL , newpres , { headers } )

      .pipe(map(res => {

        console.log( res.json() );

        return res.json();

      }));

  }

  // metodo para listar los objetos proveedor de la bbdd
  getProveedores(){

    return this.http.get( this.provsURL )

      .pipe(map(
        
        res => res.json()

      ));
      
  }

  // para actualizar un registro en la bbdd
  // primero tenemos que recoger el registro a actualizar en bbdd
  getProveedor( id$: string ){

    // url compuesta por la 'provURL' + id ( del objeto .json )
    // se compone : https://cursoangularcompras.firebaseio.com/proveedores/idDelObjeto.json
    const url = `${this.provURL}/${id$}.json`;

    return this.http.get(url)

      .pipe(map(
        
        res => res.json()

      ));

  }

  // despues lo actualizamos
  putProveedor ( proveedor : any , id$ : string ){

    const newpre = JSON.stringify( proveedor );

    const headers = new Headers({

      'ContentType':'application/json'

    });
 
    const url = `${this.provURL}/${id$}.json`;

    return this.http.put( url , newpre , {headers} )

      .pipe(map( res => {

        console.log(res.json());

        return res.json();

      }));

  }

  // para borrar un proveedor de la base de datos
  delProveedor( id$:string){

    const url = `${this.provURL}/${id$}.json`;

    return this.http.delete(url)

      .pipe(map ( res =>
        
        res.json()

      ));

  }

}
