import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public router: Router
  ) { }

  canActivate(): any {
    const exToken: boolean = localStorage.getItem('token') ? true : false;
    if (exToken == false) {
      const token: string = localStorage.getItem('token')!;
      const jwtHelper = new JwtHelperService();
      const exPiredToken: boolean = jwtHelper.isTokenExpired(token);
      if (exPiredToken === true) {
        return true;
      }
      else {
        this.router.navigate(['/', 'dashboard'])
      }
    }
    else {
        this.router.navigate(['/', 'dashboard'])
    }
  }
}
