import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-p-desafio',
  templateUrl: './p-desafio.component.html',
  styleUrls: ['./p-desafio.component.css']
})
export class PDesafioComponent implements OnInit {
  pd: any;
  desafios: any;
  terminoabuscar: any;

  constructor(public http: HttpClient,
    public _LoginService: LoginService,
    public router: Router) {
      this.terminoabuscar = '';
      this.desafios = [];
     }

  clickcreardesafio(){
    this.router.navigate(['/profesor/desafios/crear']);
  }
  verdesafio(id_desafio: any) {
    console.log(id_desafio);
    this.router.navigate(['/profesor/desafios/detalle', id_desafio]);
    
  }

  // editardesafio(id_desafio: any){
  //   console.log(id_desafio)
  // }

  obtenertodoslosdesafios(){
    this.desafios = []
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() +'getallchallenges', httpOptions).subscribe(data => {
      if (data['code'] === 200){
        this.desafios = data['challenges']
      }
    });
  }
  editardesafio(id_desafio: any, title: any, photourl: any, summary: any,
    desc: any, aim: any, category: any) {

    localStorage.setItem('id_desafio', id_desafio);
    localStorage.setItem('title', title);
    localStorage.setItem('photourl', photourl);
    localStorage.setItem('summary', summary);
    localStorage.setItem('description', desc);
    localStorage.setItem('aim', aim);
    localStorage.setItem('category', category);
    console.log('Entrando a la edición...');
    this.router.navigate(['/profesor/desafios/editar']);
  }

  ngOnInit() {
    this.obtenertodoslosdesafios()
  }

}
