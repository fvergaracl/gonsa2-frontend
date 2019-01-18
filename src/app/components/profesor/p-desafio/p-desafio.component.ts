import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-p-desafio',
  templateUrl: './p-desafio.component.html',
  styleUrls: ['./p-desafio.component.css']
})
export class PDesafioComponent implements OnInit {
  pd:any;
  desafios:any
  
  constructor(public http: HttpClient,
    public _LoginService: LoginService) {
      this.desafios = []
     }

  editardesafio(id_desafio: any){
    console.log(id_desafio)
  }

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

  ngOnInit() {
    this.obtenertodoslosdesafios()
  }

}
