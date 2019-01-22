import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-p-clases-crear',
  templateUrl: './p-clases-crear.component.html',
  styleUrls: ['./p-clases-crear.component.css']
})
export class PClasesCrearComponent implements OnInit {

  constructor(public http: HttpClient,
    public _loginService: LoginService) {}

  CrearClase(school, id, clase, year) {
    console.log(school, id, clase, year);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {school: school, identificator: id, class: clase, year: year};
     const req = this.http.post(this._loginService.getUrlApi() +'/class/new', data, httpOptions )
     .subscribe(
     res => {
       if (res['code'] === 200){
         console.log('Enviado correctamente');
       } 
       else{
         console.log(res['code']);
         console.log('Algo salio mal :c');
  }

     },
     err => {
     }
   );
}

ngOnInit() {
  console.log('Crear clases iniciado');
}

}
