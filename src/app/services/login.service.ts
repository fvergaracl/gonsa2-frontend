import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_SERVICIOS = "http://tera.uach.cl:8080"
  constructor(public http: HttpClient, private router: Router) { }
  login(usuario: Usuario) {
    let url = this.URL_SERVICIOS + "/login";
    return this.http.post(url, usuario)
      .pipe(map((resp: any) => {
        localStorage.setItem('name', resp.name);
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/estudiante']);
      }))

  }
  isloged() {
    return (!!localStorage.getItem('token')) ? true : false;
  }
}



