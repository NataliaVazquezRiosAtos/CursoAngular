import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  // el modo de transladar el codigo de los servicios a los componenntes se hace mediante metodos

  getProveedores(){

    return "Mensaje desde el servicio";

  }

  constructor() { }

}
