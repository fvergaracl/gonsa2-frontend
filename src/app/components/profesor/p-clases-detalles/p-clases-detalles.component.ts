import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-p-clases-detalles',
  templateUrl: './p-clases-detalles.component.html',
  styleUrls: ['./p-clases-detalles.component.css']
})
export class PClasesDetallesComponent implements OnInit {
  alumno: any;
  idclase:any;
  constructor(public router: Router, public http: HttpClient,
    public _loginService: LoginService) {
    this.idclase = localStorage.getItem('id_desafio');
  }
  agregarAlumno(){
    this.idclase = localStorage.getItem('id_desafio');
    this.router.navigate(['/profesor/clases/agregaralumno']);
  }
  eliminarAlumno() {
    this.idclase = localStorage.getItem('id_desafio');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {class: 1, student: 'test_student1' };

    const req = this.http.post(this._loginService.getUrlApi() + '/class/remove_student', data, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        console.log('Alumno eliminado satisfactoriamente');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Exito';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Alumno eliminado de la clase satisfactoriamente';
        document.getElementById('activarmodaldashboard').click();

      }
      else {
        console.log('Algo salio mal');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'No se pudo eliminar el alumno';
        document.getElementById('activarmodaldashboard').click();
    }
    });
  }

    ngOnInit() {
    }
}
