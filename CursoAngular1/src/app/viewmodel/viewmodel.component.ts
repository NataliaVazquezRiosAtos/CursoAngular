/* en este archivo se define la logica del componente */ 

import { Component, OnInit } from '@angular/core';

// se importa la clase alumno
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-viewmodel',
  templateUrl: './viewmodel.component.html',
  styleUrls: ['./viewmodel.component.css']
})
export class ViewmodelComponent implements OnInit {

  // creanmos un objeto Alumno

  alumno1 =  new Alumno ( 1, "Natalia" , "Vázquez" , "Coruña" );

  constructor() { }

  ngOnInit() {
  }

}
