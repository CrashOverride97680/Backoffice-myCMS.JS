import { Component } from '@angular/core';
import { HttpGetAllCategory, HttpPostInterceptor } from '../../../../core/interceptors/http.interceptor';
import { HttpService } from '../../../../core/http/http.service';
import {SettingsPrefixInterceptor} from "../../../../core/interceptors/ui-prefix.interceptor";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  public total = 0;
  public visible = 0;
  public unvisible = 0;
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
      name: {
        title: 'NAME'
      },
      description: {
        title: 'DESCRIPTION'
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
          const year = date.getFullYear();
          let month = date.getMonth() + 1;
          let stringMonth = '';
          let dt = date.getDate();
          let stringDT = '';
          if (dt < 10) {
            stringDT = '0' + dt;
          }
          if (month < 10) {
            stringMonth = '0' + month;
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
          return `<a href="/categories/manage/${row._id}" class="text-white btn btn-primary" target="_blank">Manage</a>`
        }
      }
    }
  };
  public source: HttpGetAllCategory[] = [];
  public view = true;
  constructor(
    private api: HttpService
  ) {
    const token: string = localStorage.getItem('token') || '';
    forkJoin([
      this.api.getAllNumberCategory(token),
      this.api.getAllCategory(token),
      this.api.getAllUnvisibleNumberCategory(token),
      this.api.getAllVisibleNumberCategory(token)
    ]).subscribe(rel => {
      this.total = rel[0].count;
      this.source = rel[1];
      this.unvisible = rel[2].count;
      this.visible = rel[3].count;
      this.view = false;
    });
  }

}
