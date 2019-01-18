import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoy = Date.now();
  constructor(public _loginService: LoginService,
    public router: Router) { }

  ngOnInit() {
    let rol = this._loginService.getRol()
    console.log(rol)
    if (rol === 'Professor') {
      this.router.navigate(['/profesor/inicio']);
    } else if (rol == 'Student'){
      this.router.navigate(['/estudiante/inicio']);
    } else if (rol == 'Administrador'){
      this.router.navigate(['/administrador/inicio']);
    }
  }

  redireccion() {
    this.router.navigate(['/login']);
  }

}
