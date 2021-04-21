import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  nick: string;
  token: string;
  logged: boolean;
  rol: string;
  urlapi: string;
  expiretoken: string;
  UserId: number;
  cantidadResultados: number;

  constructor(public http: HttpClient, 
    private router: Router) {
      this.token = localStorage.getItem('token')
      this.cantidadResultados = 10
      if (this.token != null) {
        let temproltoken = this.token.split('.')[1]
        this.rol = JSON.parse(atob(temproltoken))['Rol']
        this.UserId = JSON.parse(atob(temproltoken))['UserId']
        if (this.UserId%2 === 1){
          this.cantidadResultados = 20
        }
        this.nick = JSON.parse(atob(temproltoken))['User']
        this.expiretoken = JSON.parse(atob(temproltoken))['exp']
        this.logged = true
      }
      else {
        this.rol = ''
        this.nick = ''
        this.expiretoken = ''
        this.logged = false
      }
      
      this.urlapi = 'http://tera.uach.cl:4848/'
    }

  setLogged(newStatus: boolean) {
    this.logged = newStatus;  
  }

  setToken(newToken: string) {
    this.token = newToken;  
  }

  setExpireToken(newexpToken: string) {
    this.expiretoken = newexpToken;  
  }

  setNick(newNick: string) {
    this.nick = newNick;  
  }

  setRol(newRol: string) {
    this.rol = newRol;  
  }

  getLogged(): boolean {
    return this.logged;
  }

  getNick(): string {
    return this.nick;
  }

  getRol(): string {
    return this.rol;
  }

  getUrlApi(): string {
    return this.urlapi;
  }

  getIsLoged(): boolean {
    return this.logged;
  }

  getToken(): string {
    return this.token;
  }

  getexpToken(): string {
    return this.expiretoken;
  }

  getCantidadResultados(): number {
    this.cantidadResultados = 10
    this.token = localStorage.getItem('token')
    let temproltoken = this.token.split('.')[1]
    this.UserId = JSON.parse(atob(temproltoken))['UserId']
    if (this.UserId%2 === 1){
      this.cantidadResultados = 20
    }
    return this.cantidadResultados;
  }
}



