
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component , OnInit } from '@angular/core';

// importaciones para formularios
import { FormControl , FormGroup , FormBuilder , Validator , Validators } from '@angular/forms';



/*********************************************************************************************************/
/**************************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES **************************/
/*********************************************************************************************************/


// importamos el servicio de facturas
import { FacturasService } from '../../servicios/facturas.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Component({
  selector: 'app-addfacturas',
  templateUrl: './addfacturas.component.html',
  styleUrls: ['./addfacturas.component.css']
})

export class AddfacturasComponent implements OnInit {

  // ATRIBUTOS

  // objeto en el que se rellena con los datos del factura enviados a traves del formulario
  facturaForm: FormGroup;

  // objeto factura
  factura: any;

  // para valueChangues : para hacer operaciones aritmeticas en tiemoo real :
  // nos va a calcular el valo total segun los valores de baseimponible e iva

  baseimponible: any;

  tipoiva: any ;

  importeiva: any = 0;

  total: any = 0;
  

  // CONSTRUCTOR

  constructor(  private pf: FormBuilder , 
                private  facturaservice : FacturasService ) { }

  ngOnInit() {

    // 'group()' metodo para almacenar/asociar los diferentes campos
    this.facturaForm= this.pf.group({

      // para las validaciones

      proveedor: [ '' , [ Validators.required ] ] ,

      fecha: [ '' , [ Validators.required ] ] ,

      concepto: [ '' , [ Validators.required , Validators.minLength(10) ] ],

      baseimponible: [ '' , [ Validators.required ] ] ,

      tipoiva: [ '' , [ Validators.required ] ] ,   

      importeiva: this.importeiva ,

      total: this.total ,

    });

    this.onChanges();

  }

  // METODOS

  // metodo añaDir presupuestp desde formulario
  enviarFormulariofactura(){

    this.factura = this.savefactura();

    // para post http
    this.facturaservice.postFactura( this.factura ).subscribe(
       
      newpres =>{}
    
    )

    // para resetear el formulario al crear un nuevo factura
    this.facturaForm.reset();

  }

  // metodo para guardar factura
  savefactura(){

    const savefactura = {

      proveedor : this.facturaForm.get('proveedor').value,

      fecha : this.facturaForm.get('fecha').value,

      concepto : this.facturaForm.get('concepto').value,

      baseimponible : this.facturaForm.get('baseimponible').value,

      tipoiva : this.facturaForm.get('tipoiva').value,

      importeiva : this.facturaForm.get('importeiva').value,

      total : this.facturaForm.get('total').value,     

    }

    return savefactura;

  }

  // metodo que hace calculos entre campos del formulario cuando le metemos un valor antes de enviarlo
  onChanges() : void {

    this.facturaForm.valueChanges.subscribe( valor => {

      this.baseimponible = valor.baseimponible;

      this.tipoiva = valor.tipoiva;

      this.facturaForm.value.importeiva =  this.baseimponible * this.tipoiva  ;

      this.facturaForm.value.total =  this.baseimponible + ( this.baseimponible * this.tipoiva ) ;

    })

  }

}

