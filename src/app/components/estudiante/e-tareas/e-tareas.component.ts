import { Component, OnInit , Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, switchMap, take, map } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-e-tareas',
  templateUrl: './e-tareas.component.html',
  styleUrls: ['./e-tareas.component.css']
})
export class ETareasComponent implements OnInit {
//   tareascate:any[]=[];
//   constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService ) { }
//   getTareas() {
//     let tareas = [];
//     console.log(localStorage.getItem('token'));
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'JWT ' + localStorage.getItem('token')
//       })
//     };
//     this.http.get( this._LoginService.getUrlApi() + '/getallchallenges/matematicas', httpOptions).subscribe(data => {
//       if (data['code'] === 200) {
//         for (let i = 0; i < data['challenges'].length; i++) {
//           let id = data['challenges'][i][0];
//           let idto = data['challenges'][i][1];
//           let ti = data['challenges'][i][2];
//           let ur = data['challenges'][i][3];
//           let re = data['challenges'][i][4];
//           let ob = data['challenges'][i][5];
//           let fe = data['challenges'][i][6];
//           let mo = data['challenges'][i][7];
//           let ca = data['challenges'][i][8];
//           let item ={id:id, idtoken: idto, titulo:ti, url:ur, resumen:re, objetivo:ob, fecha:fe, modificacion: mo, categoria: ca};
//           tareas.push(item);
//         }
//         console.log(tareas);
//         localStorage.setItem('tareas', JSON.stringify(tareas));
//      } else {
//       console.log(data['code']);
//      }
//     });

//   return tareas;
//   }
//   ngOnInit() {
//     this.tareascate = this.getTareas();
//   }

// }

@Input() name: string;
imgags = [
  'assets/bg.jpg',
  'assets/car.png',
  'assets/canberra.jpg',
  'assets/holi.jpg'
];
public carouselTileItems$: Observable<number[]>;
public carouselTileConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
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

constructor(private cdr: ChangeDetectorRef) {}

ngOnInit() {
  this.tempData = [];
  this.carouselTileItems$ = interval(500).pipe(
    startWith(-1),
    take(6),
    map(val => {
      const data = (this.tempData = [
        ...this.tempData,
        this.imgags[Math.floor(Math.random() * this.imgags.length)]
      ]);
      return data;
    })
  );
}

}