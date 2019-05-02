import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sidebarToggle: any;
  hoy = Date.now();
  constructor(public router: Router) { }

  ngOnInit() {

  }

  redireccion() {
    this.router.navigate(['/login']);
  }

}
