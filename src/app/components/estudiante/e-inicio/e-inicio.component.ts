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
  nombre:any[]=[];
  constructor(private router: Router, public _LoginService: LoginService, public http: HttpClient) {  }

  obtenerClasesEstudiante() {
    let clases = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() +'/getallcategories', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['categories'].length; i++) {
          let temitem = data['categories'][i][1];
          let item = {nombre: data['categories'][i][0], descripcion: temitem};
          clases.push(item);
        }
        console.log(clases);
        localStorage.setItem('clasescategoria', JSON.stringify(clases));
        console.log(localStorage.getItem('clases'));
      } else {
        console.log(data['code']);
     }
    });
    return clases;
  }
  ObtenerNombreClase(elem: any) {
    console.log('el numbre de la clase es:' + elem);
    this.router.navigate(['estudiante/tareas']);
    localStorage.setItem('nombreclasecarousel', elem);
  }
  ngOnInit() {
    this.nombre = this.obtenerClasesEstudiante();
  }

}