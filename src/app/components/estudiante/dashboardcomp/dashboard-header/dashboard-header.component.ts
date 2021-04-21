import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estudiante-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponentEstudiante implements OnInit {

  constructor(public http: HttpClient,
    public _loginService: LoginService,
    public router: Router) { }

  clickensalir(){
    localStorage.removeItem('token');
    this._loginService.setLogged(false);
    this._loginService.setExpireToken('');
    this._loginService.setNick('');
    this._loginService.setRol('');
    this._loginService.setToken('');
    this.router.navigate(['/']);
  }
  configuracion(){
    this.router.navigate(['configuracion']);
  }
  ngOnInit() {
  if (this._loginService.getRol() === 'Student'){
      if (this._loginService.getLogged()) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'JWT ' + this._loginService.getToken()
          })
        };
        this.http.get( this._loginService.getUrlApi() +'islogged', httpOptions).subscribe(data => {
          if (data['code'] === 200){
            null;
          } else {
            // No tiene token o el token es invalido, por lo tanto lo redirigo al inicio de gonsa
            this._loginService.setExpireToken('')
            this._loginService.setLogged(false)
            this._loginService.setNick('')
            this._loginService.setRol('')
            this._loginService.setToken('')
            this.router.navigate(['/']);
          }
        });
      } else {

        this.router.navigate(['/']);
        // si no esta logueado en el front-end , lo redirigo a inicio
      }
    } else {
      // no es profesor entonces lo redirigo a inicio
      this.router.navigate(['/']);
    }   
  }

}