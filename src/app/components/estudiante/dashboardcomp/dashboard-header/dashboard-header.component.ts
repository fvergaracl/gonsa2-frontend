import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

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
  ngOnInit() {
  }

}
