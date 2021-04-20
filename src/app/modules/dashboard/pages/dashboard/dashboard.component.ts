import { Component } from '@angular/core';
import { HttpService } from '../../../../core/http/http.service';
import { forkJoin } from 'rxjs';
import {HttpPostInterceptor} from '../../../../core/interceptors/http.interceptor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public numPosts = 0;
  public numMail = 0;
  public numChat = 0;
  public numPay = 0;
  public view = true;
  public posts: HttpPostInterceptor[] = [];
  constructor(
    private api: HttpService
  ) {
    const token: string = localStorage.getItem('token') || '';
    const data = { token, max: 5 };
    forkJoin([
      this.api.getNumPosts(token),
      this.api.getNumMailSub(token),
      this.api.getNumChat(token),
      this.api.getNumPay(token),
      this.api.getPostsByMaxNumber(data)
    ]).subscribe(res => {
      this.numPosts = res[0].count;
      this.numMail = res[1].count;
      this.numChat = res[2].count;
      this.numPay = res[3].count;
      this.posts = res[4];
      this.view = false;
    });
  }
}

