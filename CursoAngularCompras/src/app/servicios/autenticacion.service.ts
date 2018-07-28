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

// importacion para las rutas
import { Router, ActivatedRoute } from '@angular/router';

/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  // CONSTRUCTOR

  constructor(  private router: Router,
                private activatedRouter: ActivatedRoute ) { }


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

  // metodo para iniciar sesion
  inicioSesion(userdata){

    // metodo de la API de firebase para loguearse
    firebase.auth().signInWithEmailAndPassword( userdata.email , userdata.password )

      .then( response => {

        console.log( response ) ;

        this.router.navigate(['/inicio'])

      } )

      .catch(

        error => {

           console.log( error ) ;

        }

      )
      
  }

}
