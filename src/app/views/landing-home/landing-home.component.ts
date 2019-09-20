import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {

  }

  gologin(){
    this.router.navigate(["/login"]);
  }
}
