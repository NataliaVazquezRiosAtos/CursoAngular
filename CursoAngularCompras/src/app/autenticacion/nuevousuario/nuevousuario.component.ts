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
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})

export class NuevousuarioComponent implements OnInit {

   // ATRIBUTOS

   // objeto formulario
   registroForm: FormGroup;

   // objeto usuario
   userdata: any; 

   erroresForm = {

    'email' : '' ,

    'password' : ''

  }

  // json de mensajes de validacion ()
  mensajesValidacion = {

    'email' : {

      'required' : 'El campo Email es obligatorio.' ,

      'email' : 'Introduzca un Email correcto.'

    },

    'password' : {

      'required' : 'El campo Contraseña es obligatorio.' ,

      'pattern' : 'La contraseña debe tener al menos un número, una letra ' ,

      'minlength' : 'y debe incluir más de 6 caracteres.'

    }

  }
 

   // CONSTRUCTOR

   constructor( private formBuilder : FormBuilder ,
                private autenticacionServicio : AutenticacionService ,
                private router : Router,
                private activatedRouter : ActivatedRoute ) { } 
   
   ngOnInit() {

    this.registroForm = this.formBuilder.group({

      'email' : [ '' , [ Validators.required , Validators.email ] ] ,

      'password' : [ '' , [ Validators.required , Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$') , Validators.minLength(6) ] ]
     
    })

    // llamamos al metodo valueChanges para que nos valide los campos del formulario de forma dinamica
    this.registroForm.valueChanges.subscribe( data => this.onValueChanged( data ) ) ;

    // para que se vacie
    this.onValueChanged();
 
  }
 
  // para enviar los datos del formulario a bbdd
  // primero guardamos el usuario
  // despues , a traves de nuestro servicio de autenticacion , registramos el usuario en firebase
  // por ultimo , se redirige a la pagina de inicio
  onSubmit() {

    this.userdata = this.saveUserdata();

    this.autenticacionServicio.registroUsuario( this.userdata );

    this.router.navigate(['/inicio']);

  }
 
  // para guardar el usuario en bbdd
  saveUserdata() {

    const saveUserdata = {

      email: this.registroForm.get('email').value,

      password: this.registroForm.get('password').value

    }
 
    return saveUserdata;

  }

  // metodo que gestiona dinamicamente las validaciones , 
  onValueChanged( data? : any ) {

    if ( !this.registroForm ) { 

      return; 

    }

    const form = this.registroForm ;

    for ( const field in this.erroresForm ) {

      this.erroresForm[field] = '' ;

      const control = form.get( field ) ;

      if ( control && control.dirty && !control.valid ) {

        const messages = this.mensajesValidacion[field] ;

        for ( const key in control.errors ) {

          this.erroresForm[field] += messages[key] + '';

        }

      }

    }

  }

 
}
