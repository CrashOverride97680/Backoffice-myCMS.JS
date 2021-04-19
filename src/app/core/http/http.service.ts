import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HttpGetMailSubNumbersInterceptor,
  HttpGetNumChatInterceptor,
  HttpGetNumPayInterceptor,
  HttpGetPostsNumbersInterceptor,
  HttpLogoutInterceptor, HttpPostInterceptor,
  HttpInterceptor
} from '../interceptors/http.interceptor';
import {
  LoginPrefixInterceptor,
  GetPostsByMaxNumberPrefixInterceptor
} from '../interceptors/api-prefix.interceptor';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

// LOGIN USER
  public login(data: LoginPrefixInterceptor): Observable<HttpInterceptor> {
    const url = `${environment.apiEntrypoint}/login`;
    const { email, password } = data;
    return this.http.post<HttpInterceptor>(url, { email, password });
  }

// LOGOUT USERS
  public logout(token: string): Observable<HttpLogoutInterceptor> {
    const url = `${environment.loginEntrypoint}/logout`;
    return this.http.post<HttpLogoutInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER POSTS
  public getNumPosts(token: string): Observable<HttpGetPostsNumbersInterceptor> {
    const url = `${environment.loginEntrypoint}/getPostsNumbers`;
    return this.http.get<HttpGetPostsNumbers>(url, { headers: { authorization: token }});
  }

// GET NUMBER SUBSCRIBE
  public getNumMailSub(token: string): Observable<HttpGetMailSubNumbersInterceptor> {
    const url = `${environment.loginEntrypoint}/getMailSubNumbers`;
    return this.http.get<HttpGetMailSubNumbers>(url, { headers: { authorization: token }});
  }

// GET NUMBER MESSAGE USERS
  public getNumChat(token: string): Observable<HttpGetNumChatInterceptor> {
    const url = `${environment.loginEntrypoint}/getChatsNumbers`;
    return this.http.get<HttpGetNumChat>(url, { headers: { authorization: token }});
  }

// GET NUMBER PAYMENTS DATA
  public getNumPay(token: string): Observable<HttpGetNumPayInterceptor> {
    const url = `${environment.loginEntrypoint}/getEarningNumber`;
    return this.http.get<HttpGetNumPay>(url, { headers: { authorization: token }});
  }

// GET DATA POSTS FOR DASHBOARD
  public getPostsByMaxNumber(data: GetPostsByMaxNumberPrefixInterceptor): Observable<HttpPostInterceptor[]> {
    const { token, max } = data;
    const url = `${environment.loginEntrypoint}/getPosts/${max}`;
    return this.http.get<HttpPostInterceptor[]>(url, { headers: { authorization: token }});
  }

// GET NUMBER VISIBLE POSTS
  public getVisiblePostNumber(token: string): Observable<HttpPostInterceptor[]> {
    const url = `${environment.loginEntrypoint}/getVisiblePostNumber`;
    return this.http.get<HttpPostInterceptor[]>(url, { headers: { authorization: token }});
  }

// GET NUMBER UNVISIBLE POSTS
  public getUnvisiblePostNumber(token: string): Observable<HttpPostInterceptor[]> {
    const url = `${environment.loginEntrypoint}/getUnvisiblePostNumber`;
    return this.http.get<HttpPostInterceptor[]>(url,{ headers: { authorization: token }});
  }

// GET POSTS FOR TABLE
  public getAllPostsTable(token: string) {
    const url = `${environment.loginEntrypoint}/getAllPostsTable`;
    return this.http.get(url,{ headers: { authorization: token }});
  }


}
