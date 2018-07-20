import { Directive , HostBinding , HostListener } from '@angular/core';

// para usar la directiva en HTML hay que añadirle el atributo 'appMenuitem' a la etiqueta HTML en la que la queramos usar

@Directive({
  selector: '[appMenuitem]'
})

export class MenuitemDirective {

  // @HostBinding : clase de enlace
  // la clase @HostBinding va a enlazar una clase en el elemento html que denominamos itemOrange
  // class.itemOrange :  va a eenlazar a una propiedad mostrar
  // ( hay que crear la clase css en el archivo css comun a todos los modulos )

  @HostBinding("class.itemOrange") private mostrar :  boolean = false;

  // @HostListener("mouseover") escuchara un evento
  // mouseover : evento que se lanza cuando tenemos el raton encima del elemento que lo llama
  // lo que va a hacer este metodo , es que cuando se active la anterior propiedad , la que tenemos 
  // enlazada 'mostrar'

  @HostListener("mouseover") onOver(){

    this.mostrar = true;
    
  }

  // mouseout : evento que se lanza cuando salimos del elemento (con el raton) que tontenga la propiedad mostrar

  @HostListener("mouseout") onOut(){

    this.mostrar = false;
    
  }

}
