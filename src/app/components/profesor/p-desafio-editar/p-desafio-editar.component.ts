import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-p-desafio-editar',
  templateUrl: './p-desafio-editar.component.html',
  styleUrls: ['./p-desafio-editar.component.css']
})
export class PDesafioEditarComponent implements OnInit {
  // localStorage.getItem('school')
  desafioAEditar: any;
  // id_desafio: any;
  constructor(public http: HttpClient,
    public _loginService: LoginService) {
    this.desafioAEditar = {title: localStorage.getItem('title'),
                           photourl: localStorage.getItem('photourl'),
                           summary: localStorage.getItem('summary'),
                           description: localStorage.getItem('description'),
                           aim: localStorage.getItem('aim'),
                           category: localStorage.getItem('category') };
  }
  editarDesafio(title, purl, sum, desc, aim, cat) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    console.log('Entro a la edición');
    const variablerijilla = Number(localStorage.getItem('id_desafio'));
    console.log(variablerijilla);
    const data = {idchallenge: variablerijilla, title: title, photourl: purl, summary: sum, description: desc, aim: aim, category: cat};
    console.log(data);

    const req = this.http.post(this._loginService.getUrlApi() + '/class/edit_challenge', data, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Cambio exitoso';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Desafio editado';
        document.getElementById('activarmodaldashboard').click();
        console.log('Enviado correctamente');
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: red;"></i> '
        +  'No se pudo modificar el desafio';
        document.getElementById('activarmodaldashboard').click();
   }
    });
  }
  ngOnInit() {
     // this.id_desafio = localStorage.getItem('id_desafio');
  }

}
