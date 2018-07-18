/* en este archivo se define la logica del componente */ 

/* importaciones */ 
import { Component } from '@angular/core';

/* definicion del componente */

/* es un objeto con 3 metadatos : */ 
/* 1. selector :     nos dice que el componente se va a renderiazar en la etiqueta 'app-fechaactual'  */ 
/* 2. templateUrl:   nos dice la ruta de la plantilla del componente ( html )  */ 
/* 3. styleUrls :    nos dice la ruta de los estilos propios del componente ( csss ) */ 

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})

/* para que pueda ser usado el componente , se crea la clase y se exporta */ 
/* es donde se mete la logica del componente */ 

export class FechaactualComponent {

  /* se crean una variables para despues usarlas en la plantilla */
 
  hoy = new Date ();

}
