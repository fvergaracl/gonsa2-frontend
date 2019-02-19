import { Component, OnInit , Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService, private cdr: ChangeDetectorRef ) {
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