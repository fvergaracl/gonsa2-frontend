import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-clases-editar',
  templateUrl: './p-clases-editar.component.html',
  styleUrls: ['./p-clases-editar.component.css']
})
export class PClasesEditarComponent implements OnInit {
  claseeditar:any;
  constructor() {
    
    this.claseeditar = {school: localStorage.getItem('school'), identificator: localStorage.getItem('identificator'),
    clase: localStorage.getItem('clase'), year: localStorage.getItem('year')};
   }

  ngOnInit() {
  }

}
