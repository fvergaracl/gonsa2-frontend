import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-dashboardestu-sidebar',
  templateUrl: './dashboardestu-sidebar.component.html',
  styleUrls: ['./dashboardestu-sidebar.component.css']
})
export class DashboardestuSidebarComponent implements OnInit {

  minutos: number;
  segundos: number;
    objetivosidebar: string = localStorage.getItem('objetivosidebar');
    descripcionsidebar: string = localStorage.getItem('descripcionsidebar');
    curso: string = localStorage.getItem('nombreclasecarousel');
    nick: string = this._LoginService.getNick();
  constructor(public _LoginService: LoginService) {
    this.minutos = 45;
    this.segundos = 59;
    setInterval(() => this.tick(), 1000);
   }
  
  private tick(): void {
    if (--this.segundos < 0) {
      this.segundos = 59;
      if (--this.minutos < 0) {
        this.minutos = 45;
        this.segundos = 59;
      }
    }
   }
  ngOnInit() {
  
  }
}
