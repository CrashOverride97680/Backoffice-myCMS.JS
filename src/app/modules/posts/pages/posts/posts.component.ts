import { Component } from '@angular/core';
import { SettingsPrefixInterceptor } from '../../../../core/interceptors/ui-prefix.interceptor';
import { HttpService } from '../../../../core/http/http.service';
import { HttpPostInterceptor } from '../../../../core/interceptors/http.interceptor';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public settings = {
    hideSubHeader: false,
    actions: false,
    attr: {
      class: 'table'
    },
    columns: {
      _id: {
        title: 'ID',
        show: false
      },
      type: {
        title: 'TYPE'
      },
      title: {
        title: 'TITLE'
      },
      visible: {
        title: 'VISIBLE',
        filter: false
      },
      updated: {
        title: 'DD/MM/YYYY'
      },
      actions: {
        title: 'ACTIONS',
        type: 'html',
        filter: false,
        sort: false,
        valuePrepareFunction: (row: SettingsPrefixInterceptor) => {
          return `<span><a href="/modifyPosts/${row._id}" title="modify ${row.title}" target="_blank">Modify</a> / <a href="/deletePosts/${row._id}" title="delete ${row._id}">Delete</a></span>`
        }
      }
    }
  };
  public total = 0;
  public visible = 0;
  public unvisible = 0;
  public source: HttpPostInterceptor[] = [];
  public view = true;
  constructor(
    private api: HttpService
  ) {
    const token: string = localStorage.getItem('token') || '';
    forkJoin([
      this.api.getNumPosts(token),
      this.api.getVisiblePostNumber(token),
      this.api.getUnvisiblePostNumber(token),
      this.api.getAllPostsTable(token)
    ]).subscribe(res => {
      this.total = res[0].count;
      this.visible = res[1].count;
      this.unvisible = res[2].count;
      this.source = res[3];
      this.view = false;
    });
  }
}
