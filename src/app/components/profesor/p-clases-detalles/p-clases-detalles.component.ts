import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-p-clases-detalles',
  templateUrl: './p-clases-detalles.component.html',
  styleUrls: ['./p-clases-detalles.component.css']
})
export class PClasesDetallesComponent implements OnInit {
  alumno: any;
  idclase:any;
  constructor(public router: Router) { 
    this.idclase = localStorage.getItem('id_desafio');
  }
  agregarAlumno(){
    this.idclase = localStorage.getItem('id_desafio');
    this.router.navigate(['/profesor/clases/agregaralumno']);
  }
    ngOnInit() {
      
    }
}
