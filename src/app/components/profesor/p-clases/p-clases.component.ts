import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-p-clases',
  templateUrl: './p-clases.component.html',
  styleUrls: ['./p-clases.component.css']
})
export class PClasesComponent implements OnInit {
  clases: any;

  constructor(public http: HttpClient, public router: Router,
    public _LoginService: LoginService) {
      this.clases = [];
    }
    obtenertodaslasclases() {
      this.clases = [];
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('token')
          })
        };
        this.http.get( this._LoginService.getUrlApi() +'get_all_classes', httpOptions).subscribe(data => {
          if (data['code'] === 200) {
            this.clases = data['classes'];
          }
        });
    }
    direccionarCrearClase() {
      this.router.navigate(['/profesor/clases/crear']);
    }
    editardesafio(id_desafio: any, school: any, identificator: any, clase: any, year: any ){
      console.log(id_desafio, school, identificator, clase, year);
      localStorage.setItem('id_desafio', id_desafio);
      localStorage.setItem('school', school);
      localStorage.setItem('identificator', identificator);
      localStorage.setItem('clase', clase);
      localStorage.setItem('year', year);
      console.log('entro al editar');
      this.router.navigate(['/profesor/clases/editar']);
    }
    visualizarClase(id_desafio: any, school: any, identificator: any, clase: any, year: any){
      console.log(id_desafio,school, identificator,clase, year);
      localStorage.setItem('id_desafio',id_desafio);
      localStorage.setItem('school',school);
      localStorage.setItem('identificator',identificator);
      localStorage.setItem('clase',clase);
      localStorage.setItem('year',year);
      console.log('visualizando clase...');
      this.router.navigate(['/profesor/clases/detalles']);
    }
    ngOnInit() {
      this.obtenertodaslasclases();
      console.log(this.obtenertodaslasclases);
    }
}

