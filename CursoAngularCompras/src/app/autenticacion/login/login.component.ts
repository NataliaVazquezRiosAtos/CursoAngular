/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component , OnInit } from '@angular/core';

// importaciones para formularios
import { FormControl , FormGroup , FormBuilder , Validator , Validators } from '@angular/forms';


// importaciones para las rutas
import { Router , ActivatedRoute } from '@angular/router';

/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/


// importo el servicio de presupuestos 
import { AutenticacionService } from '../../servicios/autenticacion.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // ATRIBUTOS

  loginForm : FormGroup;

  userdata : any ;

  // mensaje en caso de que el usuario o contraseña sea incorrecto
  mensaje = false;

  // CONSTRUCTOR

  constructor( private formBuilder : FormBuilder ,
    private autenticacionServicio : AutenticacionService ,
    private router : Router,
    private activatedRouter : ActivatedRoute ) { } 

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
  
      'email' : [ '' , [ Validators.required , Validators.email ] ] ,
  
      'password' : [ '' , [ Validators.required , Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$') , Validators.minLength(6) ] ]
       
    })

  }

  // para enviar los datos del formulario a bbdd
  // primero guardamos el usuario
  // despues , a traves de nuestro servicio de autenticacion , registramos el usuario en firebase 
  onSubmit() {

    this.userdata = this.saveUserdata();

    this.autenticacionServicio.inicioSesion( this.userdata );

    // se retrasa 2 segundos la colocacion del mensaje de error para que de tiempo a hacer la consulta al servidor
    setTimeout( () => {

      if ( this.isAuth() == false ) {

        this.mensaje = true;

      }

    } , 2000 );

  }

  // para guardar el usuario en bbdd
  saveUserdata() {

    const saveUserdata = {

      email: this.loginForm.get('email').value,

      password: this.loginForm.get('password').value

    }
 
    return saveUserdata;

  }

   // metodo que devulve si el usuario a iniciado sesion o no
   isAuth() {

    return this.autenticacionServicio.isAuthenticated();

  }

}
