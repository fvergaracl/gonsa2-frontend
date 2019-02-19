import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-dashboardestu-sidebar',
  templateUrl: './dashboardestu-sidebar.component.html',
  styleUrls: ['./dashboardestu-sidebar.component.css']
})
export class DashboardestuSidebarComponent implements OnInit {


    objetivosidebar: string = localStorage.getItem('objetivosidebar');
    descripcionsidebar: string = localStorage.getItem('descripcionsidebar');
    curso: string = localStorage.getItem('nombreclasecarousel');
  constructor() { }

  ngOnInit() {
  
  }
}
