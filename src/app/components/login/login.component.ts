import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario'
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  usuarioForm = new FormGroup({
    user: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  });
  constructor(
    public _loginService: LoginService
  ) { }
  enviarDatos() {
    //this.usuario.user = this.usuarioForm.value.usuario;
    //this.usuario.pass = this.usuarioForm.value.password;
    console.log(this.usuarioForm.value);
    this._loginService.login(this.usuarioForm.value)
      .subscribe(resp => {
        console.log(resp);
      });
  }
  ngOnInit() {
  }

}
