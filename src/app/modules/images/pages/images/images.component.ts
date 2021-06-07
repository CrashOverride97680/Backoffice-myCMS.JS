import { Component } from '@angular/core';
import { HttpListImage } from "../../../../core/interceptors/http.interceptor";
import { HttpService } from "../../../../core/http/http.service";
import { forkJoin } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
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
      originalFileName: {
        title: 'NAME'
      },
      imgName: {
        title: 'IMG FILE SAVED'
      },
      created: {
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
        valuePrepareFunction: (cell:string, row: HttpListImage) => {
          return `<a href="${environment.mediaEntrypoint}/${row.imgName}" class="text-white btn btn-success" target="_blank">View</a>`
        }
      }
    }
  };
  public total = 0;
  public source: HttpListImage[] = [];
  public view = true;
  constructor(
    private api: HttpService
  ) {
    const token: string = localStorage.getItem('token') || '';
    forkJoin([
      this.api.getListImagesUploaded(token),
      this.api.getAllImages(token)
    ]).subscribe(res => {
      this.total = res[0].count;
      this.source = res[1];
      this.view = false;
    });
  }
}
