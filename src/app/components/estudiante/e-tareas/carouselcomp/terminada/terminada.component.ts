import { Component, OnInit , Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../services/login.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, switchMap, take, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-terminada',
  templateUrl: './terminada.component.html',
  styleUrls: ['./terminada.component.css']
})
export class TerminadaComponent implements OnInit {
  show: boolean;
  tareasfinish: any[] = [];
  curso: string = localStorage.getItem('nombreclasecarousel');
  @Input() name: string;
imgags = [
  'assets/bg.jpg',
  'assets/car.png',
  'assets/canberra.jpg',
  'assets/holi.jpg'
];
public carouselTileItems$: Observable<number[]>;
public carouselTileConfig: NguCarouselConfig = {
  grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
  speed: 250,
  point: {
    visible: true
  },
  touch: true,
  loop: true,
  // interval: { timing: 1500 },
  animation: 'lazy'
};

tempData: any[];
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService, private cdr: ChangeDetectorRef ) {
    this.tareasfinish = this.getTareasFinish(this.curso);
   }
  getTareasFinish(curso: string) {
    let tareasFinish = [];
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + localStorage.getItem('token')
        })
      };
      this.http.get( this._LoginService.getUrlApi() + '/getallchallenges_status', httpOptions).subscribe(data => {
        if (data['code'] === 200) {
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
              tareasFinish.push(item1);
            }
          }
          if (tareasFinish.length !== 0) {
            console.log('dentro del if');
            console.log(tareasFinish.length);
            localStorage.setItem('tareasfinish', JSON.stringify(tareasFinish));
            console.log(tareasFinish);
            this.show = true;
         } else {
           console.log('asdhasdjashdjhasjdhj');
          this.show = false;
          
          document.getElementById('textMensaje').textContent = 'No posees tareas terminadas';
         }
        } else {
        console.log(data['code']);
       }
      });
      return tareasFinish;
    }
  ngOnInit() {
    if (localStorage.getItem('tareasfinish')) {
      const parnofinish =  JSON.parse(localStorage.getItem('tareasfinish'));
      console.log(Object.keys(parnofinish).length);
      const obnofinish = Object.keys(parnofinish).length;
        this.tempData = [];
        this.carouselTileItems$ = interval(500).pipe(
          startWith(-1),
          take(obnofinish),
          map(val => this.tareasfinish)
        );
      }
  }

}
