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
  selector: 'app-noiniciada',
  templateUrl: './noiniciada.component.html',
  styleUrls: ['./noiniciada.component.css']
})
export class NoiniciadaComponent implements OnInit {
  show: boolean;
  tareasnoinit: any[] = [];
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
    this.tareasnoinit = this.getTareasNoInit(this.curso);
   }


  getTareasNoInit(curso: string) {
    let tareasNoInit = [];
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
            tareasNoInit.push(item3);
          }
        }
        if (tareasNoInit.length !== 0) {
          console.log('dentro del if');
          console.log(tareasNoInit.length);
          localStorage.setItem('tareasnoinit', JSON.stringify(tareasNoInit));
          console.log(tareasNoInit);
          this.show = true;
        }else{this.show = false;}
      } else {console.log(data['code']);
    }
  });
  return tareasNoInit;
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
  ngOnInit() {
    if (localStorage.getItem('tareasnoinit')) {
      const parnoinit =  JSON.parse(localStorage.getItem('tareasnoinit'));
      console.log(Object.keys(parnoinit).length);
      const obnoinit = Object.keys(parnoinit).length;
        this.tempData = [];
        this.carouselTileItems$ = interval(500).pipe(
          startWith(-1),
          take(obnoinit),
          map(val => this.tareasnoinit)
        );
      }
  }

}
