import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AsideService } from '../../static/components/aside/services/aside.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public router: Router,
    private aside: AsideService
  ) { }

  canActivate(): any {
    const exToken: boolean = localStorage.getItem('token') ? true : false;
    if (exToken === false) {
      const token: string = localStorage.getItem('token')!;
      const jwtHelper = new JwtHelperService();
      const exPiredToken: boolean = jwtHelper.isTokenExpired(token);
      if (exPiredToken === true) {
        this.aside.changeAsideData({view: false});
        return true;
      }
      else {
        this.router.navigate(['/', 'dashboard']).then(() => {
          this.aside.changeAsideData({view: true});
        });
      }
    }
    else {
        this.router.navigate(['/', 'dashboard']).then(() => {
          this.aside.changeAsideData({view: true});
        });
    }
  }
}
