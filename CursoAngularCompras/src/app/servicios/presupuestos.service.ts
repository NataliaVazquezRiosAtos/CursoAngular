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

export class PresupuestosService {

  // ATRIBUTOS

  // url para listar y añadir presupuestos
  presURL = "https://cursoangularcompras.firebaseio.com/presupuestos.json";

  // url para actualizar presupuestos
  preURL = "https://cursoangularcompras.firebaseio.com/presupuestos";


  // CONSTRUCTOR
  constructor( private http : Http ) { }


  // METODOS

  // metodo para insertar objetos presupuesto en la bbdd
  postPresupuesto( presupuesto: any ) {

    const newpres = JSON.stringify( presupuesto );

    const headers = new Headers({

      'ContentType':'application/json'

    });

    return this.http.post( this.presURL , newpres , { headers } )

      .pipe(map(res => {

        console.log( res.json() );

        return res.json();

      }));

  }

  // metodo para listar los objetos presupuesto de la bbdd
  getPresupuestos(){

    return this.http.get( this.presURL )

      .pipe(map(
        
        res => res.json()

      ));
      
  }

  // para actualizar un registro en la bbdd
  // primero tenemos que recoger el registro a actualizar en bbdd
  getPresupuesto( id$: string ){

    // url compuesta por la 'preURL' + id ( del objeto .json )
    // se compone : https://cursoangularcompras.firebaseio.com/presupuestos/idDelObjeto.json
    const url = `${this.preURL}/${id$}.json`;

    return this.http.get(url)

      .pipe(map(
        
        res => res.json()

      ));

  }

  // despues lo actualizamos
  putPresupuesto ( presupuesto: any , id$: string ){

    const newpre = JSON.stringify( presupuesto );

    const headers = new Headers({

      'ContentType':'application/json'

    });
 
    const url = `${this.preURL}/${id$}.json`;

    return this.http.put( url , newpre , {headers} )

      .pipe(map( res => {

        console.log(res.json());

        return res.json();

      }));

  }

  // para borrar un presupuesto de la base de datos
  delPresupuesto( id$:string){

    const url = `${this.preURL}/${id$}.json`;

    return this.http.delete(url)

      .pipe(map ( res =>
        
        res.json()

      ));

  }

}
