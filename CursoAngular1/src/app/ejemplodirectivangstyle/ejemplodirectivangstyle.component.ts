import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplodirectivangstyle',
  templateUrl: './ejemplodirectivangstyle.component.html',
  styleUrls: ['./ejemplodirectivangstyle.component.css']
})
export class EjemplodirectivangstyleComponent implements OnInit {

  // atributos

  puntuacion : number;

  constructor() { }

  ngOnInit() {
  }

  // metodo que devuelve el color dependiwndo del valor del atributo puntuacion
  // es verde si la puntuacion es >=5
  // es rojo si la puntuacion es < 5

  getColor(){

    return this.puntuacion >= 5 ? 'green' : 'red';

  }

}
