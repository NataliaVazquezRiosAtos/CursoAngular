// añadimos @Input a las importaciones

import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  // ATRIBUTOS

  // para pasar la propiedad definida en la clase del padre ( textoPadre ) al componente hijo se usa @Input

  @Input() textoHijo : string ;

  @Output() mensajeMarcado = new EventEmitter();

  leido : boolean = false;

  mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  marcar(){

    this.leido = !this.leido;

  }

  detectar( event ){

    this.mensaje = this.textoHijo;
    this.mensajeMarcado.emit(this.mensaje);

  }

}
