
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component , OnInit } from '@angular/core';

// para formularios
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  cargando = false ;

  // para el buscador
  campoBusqueda: FormControl ;

  busqueda: string ;

  resultados = true ;

  noresultados = false;
  

  // para que al iniciar el componente nos cargue el servicio , le pasamos al contructor un
  // objeto servicio
  constructor(private proveedoresServicio: ProveedoresService) {
   /* this.proveedoresServicio.getProveedores()
       .subscribe(proveedores => {
         for (const id$ in proveedores) {
           const p = proveedores[id$];
           p.id$ = id$;
           this.proveedores.push(proveedores[id$]);
         }
       })*/
}


  ngOnInit() {

    this.campoBusqueda = new FormControl();

    this.campoBusqueda.valueChanges.subscribe( term => {

      this.busqueda = term ;

      this.cargando = true ;

      // cuandocontenga algun caracter el campo de busqueda

      if (this.busqueda.length !==0 ){

        this.proveedoresServicio.getProveedoresSearch( this.busqueda ).subscribe ( proveedores => {

          this.proveedores = [];

          for ( const id$ in proveedores ) {

            const p = proveedores[id$];

            p.id$ = id$ ;

            this.proveedores.push( proveedores [id$] );

          }

          if ( proveedores.lenght <1 && this.busqueda.length >=1 ){

            this.noresultados = true ;

          } else {

            this.noresultados = false ;

          }

        })

        this.cargando = false ;

        this.resultados = true ;


      } else {

        this.proveedores = [] ;

        this.cargando = false ;

        this.resultados = false ;

      }

    })

  }

}
