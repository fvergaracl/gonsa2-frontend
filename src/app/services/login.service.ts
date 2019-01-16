import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nick: string;
  token: string;
  logged: boolean;
  rol: string;
  urlapi: string;
  expiretoken: string;

  constructor(public http: HttpClient, 
    private router: Router) {
      this.nick = '';
      this.token = '';
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



