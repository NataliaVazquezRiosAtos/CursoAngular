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


@Injectable()

export class FacturasService {

  // ATRIBUTOS

  // url para listar y añadir facturas
  factsURL = "https://cursoangularcompras.firebaseio.com/facturas.json";

  // url para listar y añadir facturas
  factURL = "https://cursoangularcompras.firebaseio.com/facturas";


  // CONSTRUCTOR

  constructor( private http: Http ) { }


  // METODOS

  // metodo para insertar objetos factura en la bbdd
  postFactura( factura : any ) {

    const newfac = JSON.stringify( factura );

    const headers = new Headers( {

      'Content-Type': 'application/json'

    });

    return this.http.post( this.factsURL , newfac , { headers } )

      .pipe(map(res => {

        console.log( res.json() );

        return res.json();

      }));
  }

   // metodo para listar los objetos factura de la bbdd
   getFacturas(){

    return this.http.get( this.factsURL )

      .pipe(map(
        
        res => res.json()

      ));
      
  }

  // para actualizar un registro en la bbdd
  // primero tenemos que recoger el registro a actualizar en bbdd
  getFactura( id$: string ){

    // url compuesta por la 'factURL' + id ( del objeto .json )
    // se compone : https://cursoangularcompras.firebaseio.com/facturas/idDelObjeto.json
    const url = `${this.factURL}/${id$}.json`;

    return this.http.get(url)

      .pipe(map(
        
        res => res.json()

      ));

  }

  // despues lo actualizamos
  putFactura ( factura : any , id$: string ){

    const newpre = JSON.stringify( factura );

    const headers = new Headers({

      'ContentType':'application/json'

    });
 
    const url = `${this.factURL}/${id$}.json`;

    return this.http.put( url , newpre , {headers} )

      .pipe(map( res => {

        console.log(res.json());

        return res.json();

      }));

  }

 // para borrar un factura de la base de datos
 delFactura( id$:string){

  const url = `${this.factURL}/${id$}.json`;

  return this.http.delete(url)

    .pipe(map ( res =>
      
      res.json()

    ));

}

}