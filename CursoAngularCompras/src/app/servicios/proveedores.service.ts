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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  // ATRIBUTOS

  // inicializamos un array de provveedores que contienen objetos en formato JSON
  proveedores : any = [

    { 
      nombre: 'Telefónica', 
      cif: 'B12345678', 
      direccion: 'Paseo de la Castellana, 100', 
      cp: '28.010', 
      localidad: 'Madrid', 
      provincia: 'Madrid', 
      telefono: 911111111, 
      email: 'info@telefonica.com', 
      contacto: 'Juan Pérez'
    },

    { 
      nombre: 'Iberdrola', 
      cif: 'B87654321', 
      direccion: 'Príncipe de Vergara, 200', 
      cp: '28.015', 
      localidad: 'Madrid', 
      provincia: 'Madrid', 
      telefono: 922222222, 
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }

  ]

  // el modo de transladar el codigo de los servicios a los componenntes se hace mediante metodos
  getProveedores(){

    return this.proveedores;

  }

  constructor() { }

}
