import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-p-clases-agregaralumno',
  templateUrl: './p-clases-agregaralumno.component.html',
  styleUrls: ['./p-clases-agregaralumno.component.css']
})
export class PClasesAgregaralumnoComponent implements OnInit {
  idclase: any;
  constructor(public http: HttpClient,
    public _LoginService: LoginService) { 
    this.idclase = localStorage.getItem('id_desafio');
    
  }
  agregarAlumno(idclase, alumno){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {class: Number(idclase), student: alumno};
    const req = this.http.post(this._LoginService.getUrlApi()+ 'class/add_student', data, httpOptions)
    .subscribe(
      res => {
        console.log(res)
        if (res['codigo'] === 200) {
          console.log('Estudiante agregado exitosamente');
        } else { console.log('Algo salio mal');}
      },
      err => {
      }
    );
  }

  ngOnInit() {
  }

}
