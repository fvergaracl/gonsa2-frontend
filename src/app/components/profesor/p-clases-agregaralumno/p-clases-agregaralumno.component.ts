import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-p-clases-agregaralumno',
  templateUrl: './p-clases-agregaralumno.component.html',
  styleUrls: ['./p-clases-agregaralumno.component.css']
})
export class PClasesAgregaralumnoComponent implements OnInit {
  idclase = localStorage.getItem('id_desafio');
  constructor(public http: HttpClient,
    public _LoginService: LoginService) { }
  agregarAlumno(alumno){
    console.log(this.idclase, alumno);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {class: this.idclase, student: alumno};
    const req = this.http.post(this._LoginService.getUrlApi()+ 'class/add_student', data, httpOptions)
    .subscribe(
      res => {
        console.log(res)
        if (res['code'] === 200) {
          Swal.fire({title: 'Estudiante agregado correctamente',
          timer: 1500,
          showConfirmButton: false,
          type: 'success'});
           console.log('Enviado correctamente');
           (<HTMLInputElement>document.getElementById('alumno')).value = '';

        } else {
          console.log(res);
          Swal.fire({title: 'Hubo un error '+ res['code'] + '',
          text: 'Vuelve a intentar con otra búsqueda',
          type: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });

        }
      }
    );
  }
  

  ngOnInit() {
  }
}
