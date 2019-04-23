import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-clases-crear-estudiante',
  templateUrl: './p-clases-crear-estudiante.component.html',
  styleUrls: ['./p-clases-crear-estudiante.component.css']
})
export class PClasesCrearEstudianteComponent implements OnInit {
  // nick: any;
  // email: any;
  // sex: any;
  // school: any;
  // class: any;
  // birth_year: any;
  // birth_month: any;
  // birth_day: any;
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

    });
  }
}