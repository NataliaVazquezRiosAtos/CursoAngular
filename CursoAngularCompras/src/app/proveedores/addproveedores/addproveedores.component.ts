
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component , OnInit  , ViewChild } from '@angular/core';

// importaciones para formularios
import { FormControl , FormGroup , FormBuilder , Validator , Validators } from '@angular/forms';


// importacion para las rutas
import { Router } from '@angular/router';


/*********************************************************************************************************/
/**************************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES **************************/
/*********************************************************************************************************/


// importamos el servicio de proveedores
import { ProveedoresService } from '../../servicios/proveedores.service';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/


@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})

export class AddProveedoresComponent implements OnInit {

  // ATRIBUTOS 

  // objeto en el que se rellena con los datos del proveedor enviados a traves del formulario
  proveedorForm : FormGroup;

  // objeto proveedor
  proveedor : any;

  // para valueChangues : para hacer operaciones aritmeticas en tiemoo real :
  // nos va a calcular el valo total segun los valores de baseimponible e iva

 // array de provincias de españa
 provincias: string[] =   [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
                            'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
                            'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
                            'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
                            'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
                            'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
                            'Zamora','Zaragoza' ] ;

 id : string ;
  

  // CONSTRUCTOR

  constructor(  private pf: FormBuilder , 
                private  proveedoreservice : ProveedoresService , 
                private router : Router ) { }

  ngOnInit() {

    // 'group()' metodo para almacenar/asociar los diferentes campos
    this.proveedorForm= this.pf.group({

      // para las validaciones

      nombre : [ '' , [ Validators.required ] ] ,

      cif : [ '' , [ Validators.required ] ] ,  

      direccion : [ '' , [ Validators.required ] ] , 
      
      cp : [ '' , [ Validators.required ] ] , 

      localidad : [ '' , [ Validators.required ] ] , 

      provincia : [ '' , [ Validators.required ] ] , 

      telefono : [ '' , [ Validators.required ] ] , 

      email : [ '' , [ Validators.required ] ] , 

      contacto : [ '' , [ Validators.required ] ] ,

    });

  }

  // METODOS

  // metodo añadir presupuesto desde formulario
  onSubmit(){

    this.proveedor = this.saveProveedor();

    // para post http
    this.proveedoreservice.postProveedor( this.proveedor ).subscribe(
       
      newpres =>{

        this.router.navigate(['/inicio/proveedores'])

      }
    
    )

    // para resetear el formulario al crear un nuevo proveedor
    this.proveedorForm.reset();

  }

  // metodo para guardar proveedor
  saveProveedor(){

    const saveproveedor = {

      nombre : this.proveedorForm.get('nombre').value,

      cif : this.proveedorForm.get('cif').value,

      direccion : this.proveedorForm.get('direccion').value,

      cp : this.proveedorForm.get('cp').value,

      localidad : this.proveedorForm.get('localidad').value,

      provincia : this.proveedorForm.get('provincia').value,

      telefono : this.proveedorForm.get('telefono').value,
      
      email : this.proveedorForm.get('email').value,  

      contacto : this.proveedorForm.get('contacto').value,  

    }

    return saveproveedor;

  }


}
