
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component, OnInit } from '@angular/core';

// importaciones para formularios
import { FormControl , FormGroup , FormBuilder , Validator , Validators } from '@angular/forms';

// importaciones para recoger el id del presupuesto  en el metodo http , para poder modificarlo
import { Router , ActivatedRoute } from '@angular/router';


/*********************************************************************************************************/
/**************************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES **************************/
/*********************************************************************************************************/


// importamos el servicio de presupuestos
import { PresupuestosService } from '../../servicios/presupuestos.service';



/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-editpresupuestos',
  templateUrl: './editpresupuestos.component.html',
  styleUrls: ['./editpresupuestos.component.css']
})

export class EditpresupuestosComponent implements OnInit {

   // ATRIBUTOS

  // objeto en el que se rellena con los datos del presupuesto enviados a traves del formulario
  presupuestoForm: FormGroup;

  // objeto presupuesto
  presupuesto: any;

  // para valueChangues : para hacer operaciones aritmeticas en tiemoo real :
  // nos va a calcular el valo total segun los valores de baseimponible e iva

  baseimponible: any;

  tipoiva: any ;

  importeiva: any = 0;

  total: any = 0;

  // id del objeto a modificar

  id : string ;
  

  // CONSTRUCTOR

  // recuperamos de la base de datos un registro concreto y volcarlo en nuestra propiedad  'this.presupuesto'
  constructor(  private pf: FormBuilder , 
                private presupuestoService : PresupuestosService ,
                private router : Router ,
                private activatedRoute : ActivatedRoute ) { 

                  this.activatedRoute.params.subscribe( parametros => {

                    this.id = parametros['id'];

                    this.presupuestoService.getPresupuesto( this.id ).subscribe( presupuesto => 
                      
                      this.presupuesto = presupuesto )                   

                  })

                }

  ngOnInit() {

    // 'group()' metodo para almacenar/asociar los diferentes campos
    this.presupuestoForm= this.pf.group({

      // para las validaciones

      proveedor : [ '' , [ Validators.required ] ] ,

      fecha : [ '' , [ Validators.required ] ] ,

      concepto : [ '' , [ Validators.required , Validators.minLength(10) ] ],

      baseimponible : [ '' , [ Validators.required ] ] ,

      tipoiva : [ '' , [ Validators.required ] ] ,   

      importeiva : this.importeiva ,

      total : this.total 

    });

    this.onChanges();

  }

  // METODOS

  // metodo añadir presupuest0 desde formulario
  enviarFormularioPresupuesto(){

    this.presupuesto = this.savePresupuesto();

    // para post http
    this.presupuestoService.putPresupuesto( this.presupuesto , this.id ).subscribe(
       
      newpres =>{

        this.router.navigate(['/listpresupuestos']);

      }
    
    )

    // para resetear el formulario al crear un nuevo presupuesto
    this.presupuestoForm.reset();

  }

  // metodo para guardar presupuesto
  savePresupuesto(){

    const savePresupuesto = {

      proveedor : this.presupuestoForm.get('proveedor').value,

      fecha : this.presupuestoForm.get('fecha').value,

      concepto : this.presupuestoForm.get('concepto').value,

      baseimponible : this.presupuestoForm.get('baseimponible').value,

      tipoiva : this.presupuestoForm.get('tipoiva').value,

      importeiva : this.presupuestoForm.get('importeiva').value,

      total : this.presupuestoForm.get('total').value,     

    }

    return savePresupuesto;

  }

  // metodo que hace calculos entre campos del formulario cuando le metemos un valor antes de enviarlo
  onChanges() : void {

    this.presupuestoForm.valueChanges.subscribe( valor => {

      this.baseimponible = valor.baseimponible;

      this.tipoiva = valor.tipoiva;

      this.presupuestoForm.value.importeiva =  this.baseimponible * this.tipoiva  ;

      this.presupuestoForm.value.total =  this.baseimponible + ( this.baseimponible * this.tipoiva ) ;

    })
    
  }

}
