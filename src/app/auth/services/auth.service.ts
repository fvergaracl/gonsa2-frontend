import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Tokens } from '../models/tokens';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  private _nick: string;
  private token: string;
  private _rol: string;
  private _expiretoken: string;
  

  constructor(private http: HttpClient, private router:Router) {}

  setValues(res: Object) {
    this.token = res['token'];
    this.nick = res['name'];
    let temproltoken = res['token'].split('.')[1]
    let rol = JSON.parse(atob(temproltoken))['Rol']
    let expiracion_token = JSON.parse(atob(temproltoken))['exp']
    this.rol = rol
    this.expiretoken = expiracion_token
    localStorage.setItem('token',res['token'])
    if (rol === 'Professor') {
      this.router.navigate(['/professor']);
    } else if (rol == 'Student'){
      this.router.navigate(['/student']);
    } else if (rol == 'Administrador'){
      this.router.navigate(['/administrador/inicio']);
    }
  }

  login(user: { user: string, pass: string }){
    this.http.post<any>(`${config.apiUrl}/login`, user)
    .subscribe(
      res => {
        //console.log(res);
        if(res['code']===200){
          this.setValues(res);
          this.doLoginUser(user.user, res['token'])
        } else {
          window.alert("Error "+res['code']);
          this.router.navigate(['login']);
        }
      },
      err => {
      }
    );
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, token: string) {
    this.loggedUser = username;
    console.log("Hi, " + this.loggedUser+" you are a "+this.rol);
    this.storeJwtToken(token);
  }

  private doLogoutUser() {
    console.log("Bye, "+this.loggedUser);
    this.loggedUser = null;
    this.removeTokens();
    this.router.navigate(['login']);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
    //localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    //localStorage.removeItem(this.REFRESH_TOKEN);
  }

  //SETTERS AND GETTERS
  public get nick(): string {
    return this._nick;
  }
  public set nick(value: string) {
    this._nick = value;
  }
  public get expiretoken(): string {
    return this._expiretoken;
  }
  public set expiretoken(value: string) {
    this._expiretoken = value;
  }

  public get rol(): string {
    return this._rol;
  }
  public set rol(value: string) {
    this._rol = value;
  }
}

