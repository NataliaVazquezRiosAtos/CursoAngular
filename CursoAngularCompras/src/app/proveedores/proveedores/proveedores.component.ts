import { Component, OnInit } from '@angular/core';

// importamos el servicio
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  // ATRIBUTOS

  proveedores : any

  // mensaje : string ;

  // para que al iniciar el componente nos cargue el servicio , le pasamos al contructor un
  // objeto servicio
  constructor( private proveedoresServicio : ProveedoresService) { }

  // se llama al metodo del servicio desde el componente
  // ngOnInit() : relaiza una funcion semejante a la del constructor :
  // cada vez que se inicialice dentro cel ciclo de vida de los componentes Angular,
  // este componente llevara a cabo el codigo que escribamos dentro
  ngOnInit() {

    this.proveedores = this.proveedoresServicio.getProveedores();

    // this.mensaje = this.proveedoresServicio.getProveedores();
    
  }

}
