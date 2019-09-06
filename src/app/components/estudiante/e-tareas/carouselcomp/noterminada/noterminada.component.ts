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
  selector: 'app-noterminada',
  templateUrl: './noterminada.component.html',
  styleUrls: ['./noterminada.component.css']
})
export class NoterminadaComponent implements OnInit {
  show: boolean;
  tareasnofinish: any[] = [];
  curso: string = localStorage.getItem('nombreclasecarousel');
  @Input() name: string;
  imgags = [
    '../../../assets/bg.jpg',
    '../../../assets/car.png',
    '../../../assets/canberra.jpg',
    '../../../assets/holi.jpg'
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
    this.tareasnofinish = this.getTareasNoFinish(this.curso);
   }
   getTareasNoFinish(curso: string) {
    let tareasNoFinish = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallchallenges_status', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
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
           tareasNoFinish.push(item2);
          }
        }
        if (tareasNoFinish.length !== 0) {
          console.log('dentro del if');
          console.log(tareasNoFinish.length);
          localStorage.setItem('tareasnofinish', JSON.stringify(tareasNoFinish));
          console.log(tareasNoFinish);
          this.show = true;
        }else{this.show=false;}
      } else {console.log(data['code']);
    }
  });
  return tareasNoFinish;
}
setInfoNoTerminada (objetivo: any, descripcion: any, id: any ) {
  console.log(objetivo);
  console.log(descripcion);
  console.log(id);
  localStorage.setItem('idsidebar', id);
  localStorage.setItem('objetivosidebar', objetivo);
  localStorage.setItem('descripcionsidebar', descripcion);
  this.router.navigate(['estudiante/busquedas']);
}

  ngOnInit() {
    if (localStorage.getItem('tareasnofinish')) {
      const parnofinish =  JSON.parse(localStorage.getItem('tareasnofinish'));
      console.log(Object.keys(parnofinish).length);
      const obnofinish = Object.keys(parnofinish).length;
        this.tempData = [];
        this.carouselTileItems$ = interval(500).pipe(
          startWith(-1),
          take(obnofinish),
          map(val => this.tareasnofinish)
        );
      }
  }

}
