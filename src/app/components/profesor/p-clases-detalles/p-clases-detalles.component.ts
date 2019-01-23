import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-p-clases-detalles',
  templateUrl: './p-clases-detalles.component.html',
  styleUrls: ['./p-clases-detalles.component.css']
})
export class PClasesDetallesComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router,
    public _LoginService: LoginService) {}
    añadirAClasePorNick(nick: any) { }

    añadirAClasePorEmail(email: any) { }
    
    ngOnInit() {
      
    }
}
