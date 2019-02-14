import { Component, OnInit , Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, switchMap, take, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-e-tareas',
  templateUrl: './e-tareas.component.html',
  styleUrls: ['./e-tareas.component.css']
})
export class ETareasComponent implements OnInit {
  tareascate: any[] = [];
@Input() name: string;
imgags = [
  'assets/bg.jpg',
  'assets/car.png',
  'assets/canberra.jpg',
  'assets/holi.jpg'
];
public carouselTileItems$: Observable<number[]>;
public carouselTileItems2$: Observable<number[]>;
public carouselTileItems3$: Observable<number[]>;
tareas: any;
tareasFinish: any;
tareasNoFinish: any;
tareasNoInit: any;
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
public carouselTileConfig2: NguCarouselConfig = {
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
public carouselTileConfig3: NguCarouselConfig = {
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
tempData2: any[];
tempData3: any[];

constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService, private cdr: ChangeDetectorRef ) {
  this.getTareas();
    
  if (localStorage.getItem('tareasfinalizadas')){
    console.log('existe 1');
    const parsetareas =  JSON.parse(localStorage.getItem('tareasfinalizadas'));
    console.log(Object.keys(parsetareas).length);
    const obtareas = Object.keys(parsetareas).length;
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(obtareas),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }
  else{console.log('no existe tareas finalizadas')}
   if(localStorage.getItem('tareasnoiniciadas')) {
    console.log('existe 2');
     const parsetareas3 =  JSON.parse(localStorage.getItem('tareasnoiniciadas'));
     console.log(Object.keys(parsetareas3).length);
     const obtareas2 = Object.keys(parsetareas3).length;
     this.tempData2 = [];
     this.carouselTileItems2$ = interval(500).pipe(
       startWith(-1),
       take(obtareas2),
       map(val => {
         const data = (this.tempData2 = [
           ...this.tempData2,
           this.imgags[Math.floor(Math.random() * this.imgags.length)]
         ]);
         return data;
       })
     );
   }
   else{console.log('no existe tareas no iniciadas')}

 }

getTareas() {
    this.tareasFinish = [];
    this.tareasNoFinish = [];
    this.tareasNoInit = [];
    console.log(localStorage.getItem('token'));
    const nombreClase = localStorage.getItem('nombreclasecarousel');
    console.log(nombreClase);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallchallenges_status', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['finalized_challenge'].length; i++) {
          if (data['finalized_challenge'][i][8] === nombreClase) {
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
            const item = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du, fini: ini, ffin: fi, intentos: ni,
            respuesta: res };
            this.tareasFinish.push(item);
          }
        }
        for (let i = 0; i < data['no_finalized_challenge'].length; i++) {
          if (data['no_finalized_challenge'][i][8] === nombreClase) {
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
          const item = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du, fini: ini, intentos: ni,
            respuesta: res };
          this.tareasNoFinish.push(item);
          }
        }
        for (let i = 0; i < data['no_init_challenge'].length; i++) {
          if (data['no_init_challenge'][i][8] === nombreClase) {
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
          const item = {id: id, titulo: ti, url: ur, resumen: re, descripcion: de, objetivo: ob,
            fecha: fe, modificacion: mo, categoria: ca, dueno: du };
          this.tareasNoInit.push(item);
          }
        }
        if (this.tareasNoInit.length !== 0) {
          console.log('existe tareas no iniciadas')
          localStorage.setItem('tareasnoiniciadas', JSON.stringify(this.tareasNoInit));
          console.log(this.tareasNoInit.length);
        }
        if(this.tareasFinish.length !== 0){
          console.log('existe tareas finalizadas')
        localStorage.setItem('tareasfinalizadas', JSON.stringify(this.tareasFinish));
        console.log(this.tareasFinish.length);
      }
        if(this.tareasNoFinish.length !== 0){
          console.log('existe tareas sin iniciar ')
        localStorage.setItem('tareasiniciadas', JSON.stringify(this.tareasNoFinish));
        console.log(this.tareasNoFinish.length);
      }

      } else {
      console.log(data['code']);
     }
    });
  }
atras() {
  localStorage.removeItem('tareasfinalizadas');
  localStorage.removeItem('tareasnoiniciadas');
  localStorage.removeItem('tareasiniciadas');
  this.router.navigate(['/estudiante/inicio']);
}
ngOnInit() {

   if(localStorage.getItem('tareasiniciadas')){
     const parsetareas2 =  JSON.parse(localStorage.getItem('tareasiniciadas'));
     console.log(Object.keys(parsetareas2).length);
     const obtareas3 = Object.keys(parsetareas2).length;
     this.tempData3 = [];
     this.carouselTileItems3$ = interval(500).pipe(
       startWith(-1),
       take(obtareas3),
       map(val => {
         const data = (this.tempData2 = [
           ...this.tempData2,
           this.imgags[Math.floor(Math.random() * this.imgags.length)]
         ]);
         return data;
       })
     );
   }

  
  // const obtareas3 = Object.keys(parsetareas3).length;
  // console.log('largo tarea finalizadas'+ obtareas);
  // console.log('largo tarea noooo iniciadas'+ obtareas2);
  // console.log('largo tarea iniciadas'+ obtareas3);
  // this.tempData = [];
  // this.carouselTileItems$ = interval(500).pipe(
  //   startWith(-1),
  //   take(obtareas),
  //   map(val => {
  //     const data = (this.tempData = [
  //       ...this.tempData,
  //       this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //     ]);
  //     return data;
  //   })
  // );
  // this.tempData2 = [];
  // this.carouselTileItems2$ = interval(500).pipe(
  //   startWith(-1),
  //   take(obtareas2),
  //   map(val => {
  //     const data = (this.tempData2 = [
  //       ...this.tempData2,
  //       this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //     ]);
  //     return data;
  //   })
  // );
}

}