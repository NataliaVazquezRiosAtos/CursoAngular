/*
 * IMPORTANTE! 
 * 
 * Al crear un servicio desde consola, acordarse de importar el servicio y meterlo en el array 
 * de providers del archivo 'app.module.ts'
 * 
 * Al servicio que protege las rutas se le suele llamar 'guard'
 * 
 */

/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Injectable } from '@angular/core';

// importacion para la proteccion de rutas
import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';



/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/


// importo el servicio de autenticacion 
import { AutenticacionService } from '../servicios/autenticacion.service';



/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Injectable({

  providedIn: 'root'

})

export class ProteccionderutasService implements CanActivate{

  // CONTRUCTOR

  constructor( private autenticacionService : AutenticacionService ) { }

  // vamos a llamar a este metodo en las rutas que querammos proteger ( en el archivo app.module.ts )
  canActivate( route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) {

    return this.autenticacionService.isAuthenticated();

  }

}
