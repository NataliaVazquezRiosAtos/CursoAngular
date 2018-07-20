import { Component, OnInit } from '@angular/core';

// importamos la clase Alumno
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-ejemplodirectivangnforconobjetos',
  templateUrl: './ejemplodirectivangnforconobjetos.component.html',
  styleUrls: ['./ejemplodirectivangnforconobjetos.component.css']
})
export class EjemplodirectivangnforconobjetosComponent implements OnInit {

  // ATRIBUTOS

  // alumnos : Array<Alumno> --> array de objetos Alumno
  // inicializamos el array con valores con formato JSON ( pares clave-valor ) , que es el que utiliza javascript
  public alumnos : Array<Alumno> = [

    { id:1 , nombre:"Natalia" , apellidos:"Vázquez Ríos" , ciudad:"Coruña" },
    { id:2 , nombre:"Carmen" , apellidos:"Rama Vales" , ciudad:"Lugo" },
    { id:3 , nombre:"Luis" , apellidos:"Fernández Rodríguez" , ciudad:"Ourense" },
    { id:4 , nombre:"Julio" , apellidos:"Blanco Arias" , ciudad:"Pontevedra" },

  ] ;

  constructor() { }

  ngOnInit() {
  }

}
