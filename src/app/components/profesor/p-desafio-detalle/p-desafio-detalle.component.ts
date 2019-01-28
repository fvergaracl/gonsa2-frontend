import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-p-desafio-detalle',
  templateUrl: './p-desafio-detalle.component.html',
  styleUrls: ['./p-desafio-detalle.component.css']
})
export class PDesafioDetalleComponent implements OnInit {
  id_:any;
  titulo = '-'
  resumen = ''
  token = ''
  descripcion =''
  objetivos = ''
  fcreado =''
  fmodificado =''
  categoria = ''
  imagePath = ''
  tieneimagen: boolean = false;
  constructor(private _Activatedroute:ActivatedRoute,
    private router: Router, 
    public _LoginService: LoginService, 
    public http: HttpClient) {
    this.id_=this._Activatedroute.snapshot.params['id'];
    this.Getallbydetalle()
  }

  Getallbydetalle(){
    this.tieneimagen = false;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() +'/getchallegebyid/' + this.id_ , httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        if (data['data'][0][3] === '-' ){
          //pass
        } else{
          this.tieneimagen = true
          this.imagePath = this._LoginService.getUrlApi() + data['data'][0][3]
        }
        this.token = data['data'][0][1]
        this.titulo = data['data'][0][2]
        this.resumen = data['data'][0][4]
        this.descripcion = data['data'][0][5]
        this.objetivos = data['data'][0][6]
        this.fcreado = data['data'][0][7]
        this.fmodificado = data['data'][0][8]
        this.categoria = data['data'][0][9]
        console.log(data['data'][0])
      } else {
        console.log(data['code']);
     }
    });
  }



  ngOnInit() {
  }

}
