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
 
   constructor( private formBuilder : FormBuilder ,
                private autenticacionServicio : AutenticacionService ,
                private router : Router,
                private activatedRouter : ActivatedRoute ) { } 
   
   ngOnInit() {

    this.registroForm = this.formBuilder.group({

      'email' : [ '' , [ Validators.required , Validators.email ] ] ,

      'password' : [ '' , [ Validators.required , Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$') , Validators.minLength(8) ] ]
     
    })
 
  }
 
  // para enviar los datos del formulario a bbdd
  // primero guardamos el usuario
  // despues , a traves de nuestro servicio de autenticacion , registramos el usuario en firebase
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
 
}
