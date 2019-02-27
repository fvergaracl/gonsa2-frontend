import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-e-busquedas',
  templateUrl: './e-busquedas.component.html',
  styleUrls: ['./e-busquedas.component.css']
})
export class EBusquedasComponent implements OnInit {
  show: boolean;
  showH: boolean;
  busqueda: any;
  respuesta: [];
  resBUSQUEDA: any;
  resLIBRERIA: any;
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService) { }

  LibreriaEstudiante() {
    const id = localStorage.getItem('idsidebar');
    this.showH = true;
    let resLibreria = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallmylibrary/'+ id, httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        resLibreria = data['message'];
        this.resLIBRERIA = resLibreria;
        console.log(this.resLIBRERIA);
     } else {console.log(data['code']);
    }
    });
  }
  GuardarApunte(urlLibreria: any, textLibreria: any) {
    console.log(urlLibreria, textLibreria);
    const id = localStorage.getItem('idsidebar');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {idchallenge: id , text: textLibreria, url: urlLibreria};
    console.log(data);
    this.http.post( this._LoginService.getUrlApi() + '/library/add', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        console.log('se agrego a la libreria');

     } else {console.log('no se agrego a libreria, hubo un problema');
    }
    });
  }
  ConsultaEstudiante(busqueda: any) {
    this.show = true;
    let resBusqueda = [];
    console.log(busqueda);
    const id = localStorage.getItem('idsidebar');
    for (let i = 0; i < busqueda.length; i++) {
      busqueda = busqueda.replace(' ', '/&');
    }
    console.log(busqueda);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };

    this.http.get( this._LoginService.getUrlApi() + '/search_bing/' + id + '/ejecucion', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        resBusqueda = data['message']['relatedSearches']['value'];
        this.resBUSQUEDA = resBusqueda;
        console.log(this.resBUSQUEDA);
     } else {console.log(data['code']);
    }
    });
  }
  TerminarDesafio(respuesta: any) {
    
    const id = Number(localStorage.getItem('idsidebar'));

    console.log(respuesta);
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
   let data = {idchallenge: id, solution: respuesta};
    console.log(data);
    this.http.post( this._LoginService.getUrlApi() + '/finish_challenge', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Desafio terminado';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'respuesta enviada';
        document.getElementById('activarmodaldashboard').click();
        console.log('Enviado correctamente');
        this.router.navigate(['/estudiante/tareas']);
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-exclamation" style="color: red;"></i> '
        +  'Error al enviar respuesta';
        document.getElementById('activarmodaldashboard').click();
   }
  });
}
  ngOnInit() {

  }

}
