
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { Component , OnInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


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

  proveedor : any ;

  // array de provincias de españa
  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ] ;


  // de esta forma tendremos  preparados los componentes de Angular para recibir el objeto del formulario
  // a '@ViewChild' se le pasa el id del formulario ( formProveedores )

  @ViewChild('formProveedores') formProveedores : NgForm;

  constructor() {

    // inicializacmos el objeto proveedor (  JSON vacio ) 

    this.proveedor = {

      nombre : '' ,
      cif : '' ,
      direccion : '' ,
      cp : '' ,
      localidad : '' ,
      provincia : '' ,
      telefono : null ,
      email : '' ,
      contacto : '' 

    }

  }

  ngOnInit() {
  }

  // añade un proveedor con los datos recogidos del formulario

  enviarFormularioProveedores(){

    this.proveedor.nombre = this.formProveedores.value.nombre;
    this.proveedor.cif = this.formProveedores.value.cif;
    this.proveedor.direccion = this.formProveedores.value.direccion;
    this.proveedor.cp = this.formProveedores.value.cp;
    this.proveedor.localidad = this.formProveedores.value.localidad;
    this.proveedor.provincia = this.formProveedores.value.provincia;
    this.proveedor.telefono = this.formProveedores.value.telefono;
    this.proveedor.email = this.formProveedores.value.email;
    this.proveedor.contacto = this.formProveedores.value.contacto;

    // resetea el formulario
    this.formProveedores.reset;

  }

}
