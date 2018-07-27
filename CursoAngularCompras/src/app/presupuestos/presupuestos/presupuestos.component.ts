
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component, OnInit } from '@angular/core';



/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/

// importo el servicio de presupuestos 
import { PresupuestosService } from '../../servicios/presupuestos.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})

export class PresupuestosComponent implements OnInit {

  // ATRIBUTOS

  presupuestos : any [] = [];

  /*
      creamos el formato segun la estructura de Firebase

      para otras bbdd se necesitariamos una API de comunicacion que convierta los datos

      se descompone el objeto que nos viene de bbdd de cada uno de los registros de presupuestos que nos devuelven de bbdd

      la propiedad 'id$' que tenemos en Firebase con estructura de arbol , 
      la convierte en una propiedad que tendremos nosotros en nuestro array del componente

  */
  constructor( private presupuestoService : PresupuestosService  ) { 

    this.presupuestoService.getPresupuestos().subscribe(presupuestos =>{

      for ( const id$ in presupuestos ){

        const p = presupuestos[id$];

        p.id$ = id$;

        this.presupuestos.push( presupuestos [id$] );
        
      }

    })

  }

  ngOnInit() {
  }

}
 