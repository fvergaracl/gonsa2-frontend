import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public _loginService: LoginService, private router: Router) { }
  canActivate() {
    if (this._loginService.isloged()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

