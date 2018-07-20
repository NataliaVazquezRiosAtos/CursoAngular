import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplodirectivangnfor',
  templateUrl: './ejemplodirectivangnfor.component.html',
  styleUrls: ['./ejemplodirectivangnfor.component.css']
})
export class EjemplodirectivangnforComponent implements OnInit {

  // atributos

  cursos : string [];

  constructor() {

    this.cursos = ["Angular","HTML","CSS"];

  }

  ngOnInit() {
  }

}
