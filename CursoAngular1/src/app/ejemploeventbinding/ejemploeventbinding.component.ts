import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemploeventbinding',
  templateUrl: './ejemploeventbinding.component.html',
  styleUrls: ['./ejemploeventbinding.component.css']
})
export class EjemploeventbindingComponent implements OnInit {

  // atributos

  texto = "Texto inicial.";

  constructor() { }

  ngOnInit() {
  }

  // metodos
  modificarTexto (){

    this.texto = "SORPRESA! He cambiado el texto.";
  }

}
