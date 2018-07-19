import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplopropertybinding',
  templateUrl: './ejemplopropertybinding.component.html',
  styleUrls: ['./ejemplopropertybinding.component.css']
})
export class EjemplopropertybindingComponent implements OnInit {
  
  // al arrancar la aplicacion la variable texto se inicializa como  "Escribe lo que quieras ..."
  // en el contructor con setTimeout() le decimos que cuando pasen 3 segundos , nos cambie el texto a "por favor"
  


  texto = "Escribe lo que quieras ...";

  constructor() { 

    setTimeout(() => {

      this.texto ="por favor";

    }, 3000)
  }

  ngOnInit() {
  }

}
