// añadimos @Input a las importaciones

import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  // atributos
  // para pasar la propiedad definida en la clase del padre ( textoPadre ) al componente hijo se usa @Input

  @Input() textoHijo : string ;

  constructor() { }

  ngOnInit() {
  }

}
