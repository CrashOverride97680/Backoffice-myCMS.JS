import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AsideService } from '../../static/components/aside/services/aside.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public router: Router,
    private aside: AsideService
  ) { }

  canActivate(): any {
    try {
      const jwtHelper = new JwtHelperService();
      const token: string | undefined = localStorage?.getItem('token') || undefined;
      const isExpiredToken: boolean = jwtHelper.isTokenExpired(token);
      if (!isExpiredToken) {
        const auth: boolean = jwtHelper.decodeToken(token)?.auth || false;
        const admin: boolean = jwtHelper.decodeToken(token)?.admin || false;
        if (admin && auth) {
          this.aside.changeAsideData({view: true});
          return true;
        }
      }
    }
    catch (e) {
      localStorage.clear();
      this.router.navigate(['/']).then(() => {
        this.aside.changeAsideData({view: false});
      });;
    }
  }
}
