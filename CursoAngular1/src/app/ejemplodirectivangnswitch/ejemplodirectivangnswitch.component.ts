import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplodirectivangnswitch',
  templateUrl: './ejemplodirectivangnswitch.component.html',
  styleUrls: ['./ejemplodirectivangnswitch.component.css']
})
export class EjemplodirectivangnSwitchComponent implements OnInit {

  gruposmusicales: any [] = [

    { nombre:"Ben Cock" , cancion:"So Cold" } ,
    { nombre:"Lukke Li" , cancion:"I Follow Rivers" } ,
    { nombre:"Swedish House Mafia" , cancion:"Don´t you worry child" } ,
    { nombre:"Lana del Rey" , cancion:"Summertime Sadness" } 

  ];

  constructor() { }

  ngOnInit() {
  }

}
