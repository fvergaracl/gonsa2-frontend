import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

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
        Swal.fire({title: 'Clase creada',
        timer: 1500,
        showConfirmButton: false,
        type: 'success'});
         console.log('Enviado correctamente');
         (<HTMLInputElement>document.getElementById('school')).value = '';
         (<HTMLInputElement>document.getElementById('id')).value =  '';
         (<HTMLInputElement>document.getElementById('clase')).value = '';
         (<HTMLInputElement>document.getElementById('year')).value = '';
       } 
       else{
        Swal.fire({
          title: 'Error ' + res['code'] + '!',
          text: 'Vuelve a intertar',
          type: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
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
