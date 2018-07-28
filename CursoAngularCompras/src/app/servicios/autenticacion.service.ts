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

// importamos la libreria de firebase de autenticacion
import * as firebase from 'firebase';



/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  // CONSTRUCTOR

  constructor() { }


  // METODOS

  // metodo para registrar un nuevo usuario
  registroUsuario( userdata ) {
    
    // metodo para enviar a firebase los datos de email y contraseña de un usuario
    // no utilizamos el metodo http , sino la libreria que nos proporciona firebase
    firebase.auth().createUserWithEmailAndPassword ( userdata.email , userdata.password )

      .catch ( error => {

        console.log( error ); 

      } )

  }

}
