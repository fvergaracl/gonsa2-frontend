import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-p-clases',
  templateUrl: './p-clases.component.html',
  styleUrls: ['./p-clases.component.css']
})
export class PClasesComponent implements OnInit {
  clases: any;

  constructor(public http: HttpClient, public router: Router,
    public _LoginService: LoginService) {
      this.clases = [];
    }
    obtenertodaslasclases() {
      this.clases = [];
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('token')
          })
        };
        this.http.get( this._LoginService.getUrlApi() +'get_all_classes', httpOptions).subscribe(data => {
          if (data['code'] === 200) {
            this.clases = data['classes'];
          }
        });
    }
    direccionarCrearClase() {
      this.router.navigate(['/profesor/clases/crear']);
    }
    ngOnInit() {
      this.obtenertodaslasclases();
      console.log(this.obtenertodaslasclases);
    }
}