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
  constructor(public http: HttpClient,
    public _LoginService: LoginService) {
      this.claseeditar = {school: localStorage.getItem('school'), identificator: localStorage.getItem('identificator'),
      clase: localStorage.getItem('clase'), year: localStorage.getItem('year')};
    }
   editarClase(school: any, id: any, clase: any, year: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {school: school, identificator: id, class: clase, year: year};
// ****Falta implementar el envio de la información.****

   }

  ngOnInit() {
  }

}
