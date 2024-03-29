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

  constructor(public http: HttpClient, 
    private router: Router) {
      this.token = localStorage.getItem('token')
      console.log(this.token)
      if (this.token != null) {
        let temproltoken = this.token.split('.')[1]
        this.rol = JSON.parse(atob(temproltoken))['Rol']
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
      
      this.urlapi = 'http://tera.uach.cl:8080/'
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
}



