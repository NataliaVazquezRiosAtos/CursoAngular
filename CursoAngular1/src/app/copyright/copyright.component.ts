import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright : string ="© Atos";

  // any : para que nos devuelva cualquier tipo de dato
  hoy : any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
