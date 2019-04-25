import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-p-clases-crear-estudiante',
  templateUrl: './p-clases-crear-estudiante.component.html',
  styleUrls: ['./p-clases-crear-estudiante.component.css']
})
export class PClasesCrearEstudianteComponent implements OnInit {
  country = 'chile';
  ngOnInit() { }

  constructor(public router: Router, public http: HttpClient,
    public _loginService: LoginService) { }

  crearEstudiante(nick, email, sex, school, clase, year, month, day) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    console.log(nick, email, sex, school, clase, year, month, day);
    if (year === '') {
      year = '';
    }
    if (month === '') {
      month = '';
    }
    if (day === '') {
      day = '';
    }
    if (sex === '') {
      sex = '';
    }
    if (school === '') {
      school = '';
    }
    if (clase === '') {
      clase = '';
    }
    if (nick === '' || email === '' ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes agregar un nick y correo para crear un estudiante'
      });
    }
    let data = {newstudents: [{nick: nick,
                               email: email,
                               sex: sex,
                               school: school,
                               class: clase,
                               birth_year: year,
                               birth_month: month,
                               birth_date: day,
                               country: this.country
                              }]};
    console.log(data);
    const req = this.http.post( this._loginService.getUrlApi() + 'createstudents', data, httpOptions)
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        Swal.fire({
          type: 'success',
          title: 'Estudiante creado',
          text: 'Estudiante creado con éxito'
        });
        Swal.fire({
          title: 'Estudiante Creado',
          text: 'Estudiante creado con éxito',
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Okey'
        }).then((result) => {
          if (result.value) {
            (<HTMLInputElement>document.getElementById('nick')).value = '';
            (<HTMLInputElement>document.getElementById('email')).value = '';
            (<HTMLInputElement>document.getElementById('sex')).value = '';
            (<HTMLInputElement>document.getElementById('school')).value = '';
            (<HTMLInputElement>document.getElementById('clase')).value = '';
            (<HTMLInputElement>document.getElementById('year')).value = '';
            (<HTMLInputElement>document.getElementById('month')).value = '';
            (<HTMLInputElement>document.getElementById('day')).value = '';
          }
        });
      }
    });
  }
}
