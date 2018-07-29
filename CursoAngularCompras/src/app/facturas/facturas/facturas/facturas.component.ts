
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component, OnInit } from '@angular/core';


/*********************************************************************************************************/
/*********************************  IMPORTANCIONES DE NUESTROS SERVICIOS *********************************/
/*********************************************************************************************************/

// importo el servicio de facturas 
import { FacturasService } from '../../servicios/facturas.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})

export class FacturasComponent implements OnInit {

  // ATRIBUTOS

  facturas : any [] = [];

  /*
      creamos el formato segun la estructura de Firebase

      para otras bbdd se necesitariamos una API de comunicacion que convierta los datos

      se descompone el objeto que nos viene de bbdd de cada uno de los registros de facturas que nos devuelven de bbdd

      la propiedad 'id$' que tenemos en Firebase con estructura de arbol , 
      la convierte en una propiedad que tendremos nosotros en nuestro array del componente

  */
  constructor( private facturaService : FacturasService  ) { 

    this.facturaService.getFacturas().subscribe(facturas =>{

      for ( const id$ in facturas ){

        const p = facturas[id$];

        p.id$ = id$;

        this.facturas.push( facturas [id$] );
        
      }

    })

  }

  ngOnInit() {
  }

  // para eliminar un registro

  eliminarfactura(id$) {

      this.facturaService.delFactura(id$)

        .subscribe( res => {

          // se vacia el array de facturas y se le vuelven a volcar los datos
          // para que al eliminar la factura se vea que se elimino en la lista
          // sin necesidad de tener que recargar la pagina

          this.facturas = [] ;

          this.facturaService.getFacturas()

            .subscribe( facturas => {

              for ( const id$ in facturas ) {

                const p = facturas[id$] ;

                p.id$ = id$ ;

                this.facturas.push(facturas[id$]);

              }

            })

        })

    }

}
