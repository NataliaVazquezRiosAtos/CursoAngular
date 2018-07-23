import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpresupuestos',
  templateUrl: './addpresupuestos.component.html',
  styleUrls: ['./addpresupuestos.component.css']
})
export class AddpresupuestosComponent implements OnInit {

  // ATRIBUTOS

  // objeto en el que se rellena con los datos del presupuesto enviados a traves del formulario
  presupuestoForm: FormGroup;

  presupuesto: any;

 
  constructor( private pf: FormBuilder) { }

  ngOnInit() {

    // 'group()' metodo para almacenar/asociar los diferentes campos
    this.presupuestoForm= this.pf.group({
      // para las validaciones
      proveedor: [ '' , [ Validators.required ] ] ,
      fecha: [ '' , [ Validators.required ] ] ,
      concepto: [ '' , [ Validators.required , Validators.minLength(10) ] ],
      baseimponible: [ '' , [ Validators.required ] ] ,
      tipoiva: [ '' , [ Validators.required ] ] ,
      total: [ '' , [ Validators.required ] ] ,
    });

  }

  // metodo añarir presupuestp desde  formulario
  enviarFormularioPresupuesto(){
     this.presupuesto = this.savePresupuesto();
  }

  savePresupuesto(){

    const savePresupuesto = {

      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      baseimponible: this.presupuestoForm.get('baseimponible').value,
      tipoiva: this.presupuestoForm.get('tipoiva').value,
      total: this.presupuestoForm.get('total').value,     

    }

    return savePresupuesto;

  }

}
