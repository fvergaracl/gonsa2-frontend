import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-p-clases-editar',
  templateUrl: './p-clases-editar.component.html',
  styleUrls: ['./p-clases-editar.component.css']
})
export class PClasesEditarComponent implements OnInit {
  claseeditar: any;
  school: any;
  identificator: any;
  clase: any;
  year: any;
  constructor(public http: HttpClient,
  public _loginService: LoginService) {
      this.school = localStorage.getItem('school');
      this.identificator = localStorage.getItem('identificator');
      this.clase = localStorage.getItem('clase');
      this.year = localStorage.getItem('year');
    }
   editarClase(school: any, id: any, clase: any, year: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {id_number: this.claseeditar,
                school: school,
                identificator: id,
                class: clase,
                year: year};
    console.log(data);
    const req = this.http.post(this._loginService.getUrlApi() + '/class/edit_info', data, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Clase modificada';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Clase modificada exitosamente';
        document.getElementById('activarmodaldashboard').click();
        console.log('Enviado correctamente');
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Error al modificar la clase';
        document.getElementById('activarmodaldashboard').click();
   }
   });
  }

  ngOnInit() {
    this.claseeditar = localStorage.getItem('id_desafio');
  }

}
