import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  range = [
    {nombre:"Desafios", descripcion:"descipcion componente", color: "bg-green", icon: "fa-tasks"},
    {nombre:"Clases", descripcion:"descipcion componente",  color: "bg-red", icon:"fa-users"},
    {nombre:"Informes", descripcion:"descipcion componente", color:"bg-yellow", icon:"fa-files-o"},
    {nombre:"Configuracion", descripcion:"descipcion componente",color:"bg-blue",  icon:"fa-cogs"}
    ];
  constructor() {}

  ngOnInit() {
    console.log("pag profesor iniciada")
  }

}
