import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-busquedas',
  templateUrl: './e-busquedas.component.html',
  styleUrls: ['./e-busquedas.component.css']
})
export class EBusquedasComponent implements OnInit {
  busqueda: any;
  constructor() { }

  ConsultaEstudiante(busqueda: any) {
    console.log(busqueda);
    for (let i = 0; i < busqueda.length; i++) {
      busqueda = busqueda.replace(" ", "/&");
    }
    console.log(busqueda);
  }


  TerminarDesafio(respuesta: any) {

  }
  ngOnInit() {

  }

}
