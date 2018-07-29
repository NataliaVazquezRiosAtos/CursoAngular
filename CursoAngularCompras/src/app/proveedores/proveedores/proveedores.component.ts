
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component , OnInit } from '@angular/core';


/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/

// importamos el servicio de proveedores
import { ProveedoresService } from '../../servicios/proveedores.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent implements OnInit {

  // ATRIBUTOS

  proveedores : any [] = [] ;

  // para spinners
  cargando = true;

  // mensaje : string ;

  // para que al iniciar el componente nos cargue el servicio , le pasamos al contructor un
  // objeto servicio
  constructor( private proveedoresServicio : ProveedoresService ) {

    this.proveedoresServicio.getProveedores().subscribe(proveedores =>{

      for ( const id$ in proveedores ){

        const p = proveedores[id$];

        p.id$ = id$;

        this.proveedores.push( proveedores [id$] );
        
      }

      this.cargando = false;

    })

   }

  ngOnInit() { }

}
