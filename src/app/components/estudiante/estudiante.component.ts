import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(public _loginService: LoginService, public router: Router) { }
  clickensalir(){
    localStorage.removeItem('token');
    this._loginService.setLogged(false)
    this._loginService.setExpireToken('')
    this._loginService.setNick('')
    this._loginService.setRol('')
    this._loginService.setToken('')
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
