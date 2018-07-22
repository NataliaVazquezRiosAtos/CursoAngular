import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})
export class AddProveedoresComponent implements OnInit {

  // ATRIBUTOS

  proveedor : any ;

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
