import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, switchMap, take, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-e-tareas',
  templateUrl: './e-tareas.component.html',
  styleUrls: ['./e-tareas.component.css']
})

export class ETareasComponent implements OnInit {
  tareasarray: any[] = [];
  alldesafios1: any [] = [];
  alldesafios2: any [] = [];
  alldesafios3: any [] = [];
  curso: string = localStorage.getItem('nombreclasecarousel');
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService ) {
    this.tareasarray = this.getallchallenge(this.curso);
  }

  getallchallenge(curso: string) {
    let desafio;
    this.alldesafios1 = [];
    this.alldesafios2 = [];
    this.alldesafios3 = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallchallenges_status', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['no_init_challenge'].length; i++) {
          if (data['no_init_challenge'][i][8] === curso) {
            const id = data['no_init_challenge'][i][0];
            const ti = data['no_init_challenge'][i][1];
            const ur = data['no_init_challenge'][i][2];
            const re = data['no_init_challenge'][i][3];
            const de = data['no_init_challenge'][i][4];
            const ob = data['no_init_challenge'][i][5];
            const fe = data['no_init_challenge'][i][6];
            const mo = data['no_init_challenge'][i][7];
            const ca = data['no_init_challenge'][i][8];
            const du = data['no_init_challenge'][i][9];
            const item3 = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du };
            this.alldesafios1.push(item3);
          }
        }
        for (let i = 0; i < data['no_finalized_challenge'].length; i++) {
          if (data['no_finalized_challenge'][i][8] === curso) {
            const id = data['no_finalized_challenge'][i][0];
            const ti = data['no_finalized_challenge'][i][1];
            const ur = data['no_finalized_challenge'][i][2];
            const re = data['no_finalized_challenge'][i][3];
            const de = data['no_finalized_challenge'][i][4];
            const ob = data['no_finalized_challenge'][i][5];
            const fe = data['no_finalized_challenge'][i][6];
            const mo = data['no_finalized_challenge'][i][7];
            const ca = data['no_finalized_challenge'][i][8];
            const du = data['no_finalized_challenge'][i][9];
            const ini = data['no_finalized_challenge'][i][10];
            const ni = data['no_finalized_challenge'][i][11];
            const res = data['no_finalized_challenge'][i][12];
            const item2 = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du, fini: ini, intentos: ni,
            respuesta: res };
            this.alldesafios2.push(item2);
          }
        }

        for (let i = 0; i < data['finalized_challenge'].length; i++) {
          if (data['finalized_challenge'][i][8] === curso) {
            const id = data['finalized_challenge'][i][0];
            const ti = data['finalized_challenge'][i][1];
            const ur = data['finalized_challenge'][i][2];
            const re = data['finalized_challenge'][i][3];
            const de = data['finalized_challenge'][i][4];
            const ob = data['finalized_challenge'][i][5];
            const fe = data['finalized_challenge'][i][6];
            const mo = data['finalized_challenge'][i][7];
            const ca = data['finalized_challenge'][i][8];
            const du = data['finalized_challenge'][i][9];
            const ini = data['finalized_challenge'][i][10];
            const fi = data['finalized_challenge'][i][11];
            const ni = data['finalized_challenge'][i][12];
            const res = data['finalized_challenge'][i][13];
            const item1 = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du, fini: ini, ffin: fi, intentos: ni,
            respuesta: res };
            this.alldesafios3.push(item1);
          }
        }
      desafio = {terminados: this.alldesafios3, pendiente: this.alldesafios2, noiniciado: this.alldesafios1};
      console.log(desafio);

      } else {console.log(data['code']); }
    });
    return(desafio);
  }

  setInfoNoIniciada(objetivo: any, descripcion: any, id: any ) {
    console.log(objetivo);
    console.log(descripcion);
    console.log(id);
    localStorage.setItem('idsidebar', id);
    localStorage.setItem('objetivosidebar', objetivo);
    localStorage.setItem('descripcionsidebar', descripcion);
    this.router.navigate(['/estudiante/busquedas']);
  }
  setInfoNoTerminada (objetivo: any, descripcion: any, id: any ) {
    console.log(objetivo);
    console.log(descripcion);
    console.log(id);
    localStorage.setItem('idsidebar', id);
    localStorage.setItem('objetivosidebar', objetivo);
    localStorage.setItem('descripcionsidebar', descripcion);
    this.router.navigate(['/estudiante/busquedas']);
  }
  atras() {
    // localStorage.removeItem('tareasfinish');
    // localStorage.removeItem('tareasnofinish');
    // localStorage.removeItem('tareasnoinit');
    this.router.navigate(['/estudiante/inicio']);
  }
  ngOnInit() {
  }
}