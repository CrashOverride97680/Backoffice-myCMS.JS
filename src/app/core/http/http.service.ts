import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpTokenInterceptor } from '../interceptors/http.token.interceptor';
import { LoginPrefixInterceptor } from '../interceptors/api-prefix.interceptor';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

// LOGIN USER
  public login(data: LoginPrefixInterceptor): Observable<HttpTokenInterceptor> {
    const url = `${environment.apiEntrypoint}/login`;
    const { email, password } = data;
    return this.http.post<HttpTokenInterceptor>(url, { email, password });
  }
}
