import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private api: ApiService
  ) {
    const token = localStorage.getItem('token');
    Promise
      .all([
        this.api.getNumPosts(token),
        this.api.getNumMailSub(token),
        this.api.getNumChat(token),
        this.api.getNumPay(token),
        this.api.getPostsByMaxNumber(token, 5)
      ])
      .then(value => {
        this.postsData = value[0];
        this.mailsubData = value[1];
        this.chatData = value[2];
        this.paymentsData = value[3];
        this.postsorig = value[4];
        this.posts = this.postsorig.map(el => {
          let data = el;
          data.updated = data.updated.split("T")[0];
          return data;
        });
        console.log("POSTS:", this.posts);
      });
  }
}

