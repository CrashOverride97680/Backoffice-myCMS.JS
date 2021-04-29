import { Component } from '@angular/core';
import { SettingsPrefixInterceptor } from '../../../../core/interceptors/ui-prefix.interceptor';
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
}
