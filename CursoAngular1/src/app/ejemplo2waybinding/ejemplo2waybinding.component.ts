import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2waybinding',
  templateUrl: './ejemplo2waybinding.component.html',
  styleUrls: ['./ejemplo2waybinding.component.css']
})
export class Ejemplo2waybindingComponent implements OnInit {

  // atributos

  texto: string = "texto al cargar la pagina";

  constructor() { }

  ngOnInit() {
  }

}
