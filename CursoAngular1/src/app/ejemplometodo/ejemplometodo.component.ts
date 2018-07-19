import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplometodo',
  templateUrl: './ejemplometodo.component.html',
  styleUrls: ['./ejemplometodo.component.css']
})
export class EjemplometodoComponent implements OnInit {

  // atributos

  puntuacion  = 9;

  // constructor

  constructor() { }

  ngOnInit() {
  }

  // metodo

  getPuntuacion(){

    return this.puntuacion;

  }
}
