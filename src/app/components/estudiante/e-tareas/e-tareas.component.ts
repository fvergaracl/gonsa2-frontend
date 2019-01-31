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
  tareascate:any[]=[];
@Input() name: string;
imgags = [
  'assets/bg.jpg',
  'assets/car.png',
  'assets/canberra.jpg',
  'assets/holi.jpg'
];
public carouselTileItems$: Observable<number[]>;
tareas: any;
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

constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService, private cdr: ChangeDetectorRef ) { }

getTareas() {
    this.tareas = [];
    console.log(localStorage.getItem('token'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallchallenges/matematicas', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['challenges'].length; i++) {
          let id = data['challenges'][i][0];
          let idto = data['challenges'][i][1];
          let ti = data['challenges'][i][2];
          let ur = data['challenges'][i][3];
          let re = data['challenges'][i][4];
          let ob = data['challenges'][i][5];
          let fe = data['challenges'][i][6];
          let mo = data['challenges'][i][7];
          let ca = data['challenges'][i][8];
          let item ={id:id, idtoken: idto, titulo:ti, url:ur, resumen:re, objetivo:ob, fecha:fe, modificacion: mo, categoria: ca};
          this.tareas.push(item);
        }
        console.log(this.tareas);
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
     } else {
      console.log(data['code']);
     }
    });
    let tareas2 = this.tareas;

  return tareas2;
  }
//   ngOnInit() {
//     this.tareascate = this.getTareas();
//   }

// }



// constructor(private cdr: ChangeDetectorRef) {}

ngOnInit() {
  let asd=  JSON.parse(localStorage.getItem('tareas'));
  let asd2= Object.keys(asd).length;
  this.tempData = [];
  this.carouselTileItems$ = interval(500).pipe(
    startWith(-1),
    take(asd2),
    map(val => {
      const data = (this.tempData = [
        ...this.tempData,
        this.imgags[Math.floor(Math.random() * this.imgags.length)]
      ]);
      return data;
    })
  );
  this.tareascate = this.getTareas();
}

}