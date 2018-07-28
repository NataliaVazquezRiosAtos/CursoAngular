
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component, OnInit } from '@angular/core';


/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/


// importo el servicio de autenticacion 
import { AutenticacionService } from '../servicios/autenticacion.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  // CONSTRUCTOR

  constructor(  private autenticacionService : AutenticacionService ) { }

  ngOnInit() {

  }

  // metodo para comprobar si el usuario a iniciado sesion
  isAuth(){

    return this.autenticacionService.isAuthenticated() ;

  }

}
