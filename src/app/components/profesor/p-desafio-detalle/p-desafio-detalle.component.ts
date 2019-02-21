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
  users_evaluated = [];
  users_in_challenge = [];
  users_without_init: any;
  constructor(private _Activatedroute:ActivatedRoute,
    private router: Router, 
    public _LoginService: LoginService, 
    public http: HttpClient) {
    this.id_=this._Activatedroute.snapshot.params['id'];
    this.Getallbydetalle();
  }

  Getallbydetalle() {
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
    this.http.get(this._LoginService.getUrlApi() + 'getstatusresponses/by_challenge/' + this.id_, httpOptions)
    .subscribe(res => {
      //console.log(res);
      if (res['code'] === 200) {
        // console.log(res['users_evaluated']);
        // console.log(res['users_in_challenge']);
        // console.log(res['without_init']);

        // this.users_evaluated = res['users_evaluated'];
        // this.users_in_challenge = res['users_in_challenge'];
        let u_e = res['users_evaluated']
        let u_i_c = res['users_in_challenge'];
        this.users_without_init = res['without_init'];
        
        for (let i = 0; i < u_e.length; i++) {
          this.users_evaluated.push(u_e[i][1]);
        }
        console.log('Estudiantes que fueron evaluados: ' + this.users_evaluated);

        for (let i = 0; i < u_i_c.length; i++) {
          // console.log(this.users_in_challenge[i][1]);
          this.users_in_challenge.push(u_i_c[i][1]);
        }
        console.log('Estudiantes que estan en el desafio: ' + this.users_in_challenge);

        console.log('Estudiantes que no han iniciado el desafio: ' + this.users_without_init);
        let estudiantes;
        estudiantes =  {evaluados: this.users_evaluated,
                        evaluando: this.users_in_challenge,
                        no_iniciados: this.users_without_init
        };
        console.log('asdasdasdasdas ' + estudiantes.no_iniciados[0]);
        console.log('Todos los estudiantes: ' + Object.values(estudiantes));
      }
    });

  }



  ngOnInit() {
  }

}
