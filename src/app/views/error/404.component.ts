import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: '404.component.html',
  styleUrls: ['404.scss']
})
export class P404Component implements OnInit{
  time: any =5;
  constructor(private router: Router) { }
  
  ngOnInit(){
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000);   
  }
}
