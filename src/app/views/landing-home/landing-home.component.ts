import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StickyNavigation } from './StickyNavigation';


@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {
  st: StickyNavigation;
  constructor(public router:Router) { 
        
  }

  ngOnInit() {
    this.st = new StickyNavigation();
  }

  

  gologin(){
    this.router.navigate(["/login"]);
  }

}
