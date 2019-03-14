import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor(public http: HttpClient,
    public _loginService: LoginService) { }
  cambiarClave(oldpass, pass1, pass2) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let claves = {oldpass: oldpass, newpass1: pass1, newpass2: pass2};
    const req = this.http.post(this._loginService.getUrlApi() + '/changepass', claves, httpOptions )
    .subscribe(res => {
      if (res['code'] === 200){
        document.getElementById('modaldashboardtitulo').innerHTML = 'Contraseña cambiada';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Contraseña cambiada exitosamente';
        document.getElementById('activarmodaldashboard').click();
        console.log('Enviado correctamente');
        
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-exclamation-triangle " style="color: red;"></i> '
        +  'Error al cambiar la contraseña';
        document.getElementById('activarmodaldashboard').click();
   }
    });
}

ObtenerRol(): boolean {
  let rol = this._loginService.getRol();
  if (rol === 'Professor') {
    return true;
  } else {return false; }
}
  ngOnInit() {
  }

}
