/*
 * IMPORTANTE! 
 * 
 * Al crear un servicio desde consola, acordarse de importar el servicio y meterlo en el array 
 * de providers del archivo 'app.module.ts'
 * 
 */

import { Injectable } from '@angular/core';


// para emplear metodo post
import { Headers , Http , Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PresupuestosService {

  presURL = "https://cursoangularcompras.firebaseio.com/presupuestos.json";

  constructor( private http : Http ) { }

  // metodo para insertar objetos presupuesto en la bbdd

  postPresupuesto(presupuesto: any):Observable<number>{
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'ContentType':'application/json'
    });
    return this.http.post( this.presURL, newpres, {headers})
      .pipe(map(res => {
        console.log(res.json());
        return res.json();
      }));
  }

  // metodo para listar los objetos presupuesto de la bbdd

  getPresupuestos(){

    return this.http.get(this.presURL)
    .pipe(map(res => res.json()
    ));
  }

}
