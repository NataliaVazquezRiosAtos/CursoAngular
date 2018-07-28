
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component, OnInit } from '@angular/core';

// importacion para las rutas
import { Router, ActivatedRoute } from '@angular/router';


/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/


// importo el servicio de presupuestos 
import { AutenticacionService } from '../servicios/autenticacion.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // CONSTRUCTOR

  constructor(  private autenticacionService : AutenticacionService ,
                private router : Router ,
                private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
  }

  // METODOS


  // metodo para comprobar si el usuario a iniciado sesion
  isAuth(){

    return this.autenticacionService.isAuthenticated() ;

  }

  // metodo para cerrar sesion
  onLogout(){

    this.autenticacionService.logout() ;

    this.router.navigate(['/inicio']) ;

  }

}
