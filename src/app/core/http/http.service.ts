import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HttpGetMailSubNumbersInterceptor,
  HttpGetNumChatInterceptor,
  HttpGetNumPayInterceptor,
  HttpGetPostsNumbersInterceptor,
  HttpLogoutInterceptor,
  HttpPostInterceptor,
  HttpInterceptor,
  HttpGetPostsVisibleNumberInterceptor,
  HttpGetPostsUnvisibleNumberInterceptor,
  HttpGetAllCategory,
  HttpStatusReturnedInterceptor,
  HttpGetAllNumberCategory,
  HttpPost,
  HttpGetNumberImage,
  HttpListImage, HttpListImageBase, HttpUserInfo
} from '../interceptors/http.interceptor';
import {
  LoginPrefixInterceptor,
  GetPostsByMaxNumberPrefixInterceptor,
  CreateCategoryPrefixInterceptor,
  ModifyCategoryPrefixInterceptor, HttpBaseImagePrefixInterceptor, HttpUserModifyDataInterceptor
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
    const url = `${environment.apiEntrypoint}/logout`;
    return this.http.post<HttpLogoutInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER POSTS
  public getNumPosts(token: string): Observable<HttpGetPostsNumbersInterceptor> {
    const url = `${environment.apiEntrypoint}/getPostsNumbers`;
    return this.http.get<HttpGetPostsNumbersInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER SUBSCRIBE
  public getNumMailSub(token: string): Observable<HttpGetMailSubNumbersInterceptor> {
    const url = `${environment.apiEntrypoint}/getMailSubNumbers`;
    return this.http.get<HttpGetMailSubNumbersInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER MESSAGE USERS
  public getNumChat(token: string): Observable<HttpGetNumChatInterceptor> {
    const url = `${environment.apiEntrypoint}/getChatsNumbers`;
    return this.http.get<HttpGetNumChatInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER PAYMENTS DATA
  public getNumPay(token: string): Observable<HttpGetNumPayInterceptor> {
    const url = `${environment.apiEntrypoint}/getEarningNumber`;
    return this.http.get<HttpGetNumPayInterceptor>(url, { headers: { authorization: token }});
  }

// GET DATA POSTS FOR DASHBOARD
  public getPostsByMaxNumber(data: GetPostsByMaxNumberPrefixInterceptor): Observable<HttpPostInterceptor[]> {
    const { token, max } = data;
    const url = `${environment.apiEntrypoint}/getPosts/${max}`;
    return this.http.get<HttpPostInterceptor[]>(url, { headers: { authorization: token }});
  }

// GET NUMBER VISIBLE POSTS
  public getVisiblePostNumber(token: string): Observable<HttpGetPostsVisibleNumberInterceptor> {
    const url = `${environment.apiEntrypoint}/getVisiblePostNumber`;
    return this.http.get<HttpGetPostsVisibleNumberInterceptor>(url, { headers: { authorization: token }});
  }

// GET NUMBER UNVISIBLE POSTS
  public getUnvisiblePostNumber(token: string): Observable<HttpGetPostsUnvisibleNumberInterceptor> {
    const url = `${environment.apiEntrypoint}/getUnvisiblePostNumber`;
    return this.http.get<HttpGetPostsUnvisibleNumberInterceptor>(url, { headers: { authorization: token }});
  }

// GET POSTS FOR TABLE
  public getAllPostsTable(token: string): Observable<HttpPostInterceptor[]> {
    const url = `${environment.apiEntrypoint}/getAllPostsTable`;
    return this.http.get<HttpPostInterceptor[]>(url, { headers: { authorization: token }});
  }

// GET ALL POSTS
  public getAllPosts(token: string): Observable<HttpPostInterceptor[]> {
    const url = `${environment.apiEntrypoint}/getAllPosts`;
    return this.http.get<HttpPostInterceptor[]>(url, { headers: { authorization: token }});
  }

// GET ALL CATEGORY
  public getAllCategory(token: string): Observable<HttpGetAllCategory[]> {
    const url = `${environment.apiEntrypoint}/getAllCategory`;
    return this.http.get<HttpGetAllCategory[]>(url, { headers: { authorization: token } });
  }

// GET SINGLE CATEGORY
  public getSingleCategory(token: string, code:string): Observable<HttpGetAllCategory> {
    const url = `${environment.apiEntrypoint}/getSingleCategory`;
    return this.http.post<HttpGetAllCategory>(url, { code },{ headers: { authorization: token } });
  }

// CREATE NEW CATEGORY
  public createNewCategory(token: string, data: CreateCategoryPrefixInterceptor): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/createCategory`;
    return this.http.post<HttpStatusReturnedInterceptor>(url, data, { headers: { authorization: token }});
  }

// MODIFY CATEGORY
  public modifyCategory(token: string, data: ModifyCategoryPrefixInterceptor): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/modifyCategory`;
    return this.http.put<HttpStatusReturnedInterceptor>(url, data, { headers: { authorization: token }});
  }

// GET ALL NUMBER CATEGORY
  public getAllNumberCategory(token: string): Observable<HttpGetAllNumberCategory> {
    const url = `${environment.apiEntrypoint}/getCategoryTotal`;
    return this.http.get<HttpGetAllNumberCategory>(url, { headers: { authorization: token } });
  }

// GET ALL NUMBER CATEGORY
  public getAllUnvisibleNumberCategory(token: string): Observable<HttpGetAllNumberCategory> {
    const url = `${environment.apiEntrypoint}/getUnvisibleCategory`;
    return this.http.get<HttpGetAllNumberCategory>(url, { headers: { authorization: token } });
  }

// GET ALL NUMBER CATEGORY
  public getAllVisibleNumberCategory(token: string): Observable<HttpGetAllNumberCategory> {
    const url = `${environment.apiEntrypoint}/getVisibleCategory`;
    return this.http.get<HttpGetAllNumberCategory>(url, { headers: { authorization: token } });
  }

  public createPost(token: string, data: HttpPost): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/createpost`;
    return this.http.post<HttpStatusReturnedInterceptor>(url, data, { headers: { authorization: token }});
  }

  public getSinglePost(token: string, code: string): Observable<HttpPost> {
    const url = `${environment.apiEntrypoint}/getSinglePost`;
    return this.http.post<HttpPost>(url, { code }, { headers: { authorization: token }});
  }

  public modifyPost(token: string, data: HttpPost): Observable<HttpStatusReturnedInterceptor[]> {
    const url = `${environment.apiEntrypoint}/modifyPosts`;
    return this.http.put<HttpStatusReturnedInterceptor[]>(url, data, { headers: { authorization: token }});
  }

  public getListImagesUploaded(token: string): Observable<HttpGetNumberImage> {
    const url = `${environment.apiEntrypoint}/getNumberTotalImage`;
    return this.http.get<HttpGetNumberImage>(url, { headers: { authorization: token } });
  }

  public getAllImages(token: string): Observable<HttpListImage[]> {
    const url = `${environment.apiEntrypoint}/getListImagesUploaded`;
    return this.http.get<HttpListImage[]>(url, { headers: { authorization: token } });
  }

  public uploadImage(token: string, formData: any): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/imgUpload`;
    return this.http.post<HttpStatusReturnedInterceptor>(url, { formData } , { headers: { authorization: token }});
  }

  public uploadImageBase(token: string, baseImgForm: HttpBaseImagePrefixInterceptor): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/imgUploadBase`;
    return this.http.post<HttpStatusReturnedInterceptor>(url, baseImgForm , { headers: { authorization: token }});
  }

  public getListImagesUploadedBase(token: string): Observable<HttpGetNumberImage> {
    const url = `${environment.apiEntrypoint}/getBaseImageTotal`;
    return this.http.get<HttpGetNumberImage>(url, { headers: { authorization: token } });
  }

  public getAllImagesBase(token: string): Observable<HttpListImageBase[]> {
    const url = `${environment.apiEntrypoint}/getListImagesUploadedBase`;
    return this.http.get<HttpListImageBase[]>(url, { headers: { authorization: token } });
  }

  public changePassword(token: string, data: { newPassword: string; }): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/resetPassword`;
    return this.http.put<HttpStatusReturnedInterceptor>(url, data,{ headers: { authorization: token }});
  }

  public getUserInfoAdmin(token: string): Observable<HttpUserInfo> {
    const url = `${environment.apiEntrypoint}/getUserInfoAdmin`;
    return this.http.get<HttpUserInfo>(url, { headers: { authorization: token } });
  }

  public modifyUsers(token: string, data: HttpUserModifyDataInterceptor): Observable<HttpStatusReturnedInterceptor> {
    const url = `${environment.apiEntrypoint}/modifyUsers`;
    return this.http.put<HttpStatusReturnedInterceptor>(url, data,{ headers: { authorization: token } });
  }
}
