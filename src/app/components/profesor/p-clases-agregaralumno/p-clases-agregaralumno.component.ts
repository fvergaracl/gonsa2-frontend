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
  constructor(public http: HttpClient,
    public _LoginService: LoginService) { }
  agregarAlumno(idclase, alumno){
    console.log(idclase, alumno);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {class: idclase, student: alumno};
    const req = this.http.post(this._LoginService.getUrlApi()+ 'class/add_student', data, httpOptions)
    .subscribe(
      res => {
        console.log(res)
        if (res['code'] === 200) {
          console.log('Estudiante agregado exitosamente');
        } else {
          console.log(res);
          console.log('Algo salio mal');
        }
      }
    );
  }

  ngOnInit() {
  }

}
