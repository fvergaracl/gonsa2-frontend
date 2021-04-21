import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-e-inicio',
  templateUrl: './e-inicio.component.html',
  styleUrls: ['./e-inicio.component.css']
})
export class EInicioComponent implements OnInit {
  nombre:any;
  categorias: any;
  item: {};
  constructor(private router: Router, public _LoginService: LoginService, public http: HttpClient) { 
    this.categorias = [];
   }
  obtenerClasesEstudiante() {
    this.categorias = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() +'/getallchallenges', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['challenges'].length; i++) {
         const temitem = data['challenges'][i][8];
          // this.categorias.push(temitem);
          // console.log(this.categorias);
          if ( (this.categorias.includes(temitem) === false)) {
              this.categorias.push(temitem);
          }
          // clases.push(nombre);
        }
        // localStorage.setItem('clasescategoria', JSON.stringify(clases));
        // console.log(localStorage.getItem('clases'));
      } else {
        
     }
    });
    // return clases;
  }
  ObtenerNombreClase(elem: any) {
    this.router.navigate(['estudiante/tareas']);
    localStorage.setItem('nombreclasecarousel', elem);
  }
  ngOnInit() {
    this.nombre = this.obtenerClasesEstudiante();
  }

}