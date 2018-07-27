/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component , OnInit } from '@angular/core';

// importaciones para formularios
import { FormControl , FormGroup , FormBuilder , Validator , Validators } from '@angular/forms';


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
 
   constructor( private formBuilder : FormBuilder ) { } 
   
   ngOnInit() {

    this.registroForm = this.formBuilder.group({

      'nombre' : [ '' , [ Validators.required , Validators.minLength(2) , Validators.maxLength(20) ] ] ,

      'email' : [ '' , [ Validators.required , Validators.email ] ] ,

      'password' : [ '' , [Validators.required , Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$' ) , Validators.minLength(8) ] ]
     
    })
 
  }
 
  // para enviar los datos del formulario a bbdd
  onSubmit() {

    this.userdata = this.saveUserdata();

  }
 
  // para guardar el usuario en bbdd
  saveUserdata() {

    const saveUserdata = {

      nombre: this.registroForm.get('nombre').value,

      email: this.registroForm.get('email').value,

      password: this.registroForm.get('password').value

    }
 
     return saveUserdata;

  }
 
}
