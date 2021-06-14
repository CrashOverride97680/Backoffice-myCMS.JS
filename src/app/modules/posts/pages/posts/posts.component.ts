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
        filter: false,
        type: 'html',
        valuePrepareFunction: (cell: boolean) => {
          return (cell
            ? '<i class="fas fa-check-circle"></i>'
            : '<i class="fas fa-times-circle"></i>');
        }
      },
      updated: {
        title: 'DD/MM/YYYY',
        filter: false,
        valuePrepareFunction: (cell: string) => {
          const date = new Date(cell);
          console.log(date);
          const year = date.getFullYear();
          let month = date.getMonth() + 1;
          let stringMonth = '';
          let dt = date.getDate();
          let stringDT = '';
          if (dt < 10) {
            stringDT = '0' + dt;
          }
          else {
            stringDT = dt.toString();
          }
          if (month < 10) {
            stringMonth = '0' + month;
          }
          else {
            stringMonth = month.toString();
          }

          return stringDT + '/' + stringMonth + '/' + year;
        }
      },
      actions: {
        title: 'ACTIONS',
        type: 'html',
        filter: false,
        sort: false,
        valuePrepareFunction: (cell:string, row: SettingsPrefixInterceptor) => {
          return `<a href="/posts/manage/${row._id}" class="text-white btn btn-primary" target="_blank">Manage</a>`
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
      this.api.getAllPosts(token)
    ]).subscribe(res => {
      this.total = res[0].count;
      this.visible = res[1].count;
      this.unvisible = res[2].count;
      this.source = res[3];
      this.view = false;
    });
  }
}
