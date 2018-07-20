import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemploifelseconmetodo',
  templateUrl: './ejemploifelseconmetodo.component.html',
  styleUrls: ['./ejemploifelseconmetodo.component.css']
})
export class EjemploifelseconmetodoComponent implements OnInit {

  // atributos

  capital: string;

  constructor() { }

  ngOnInit() {
  }

  // metodo que devuelve el resultado esperado
  getResultado(){

    return this.capital === 'Madrid' ?  true : false;

  }

}
