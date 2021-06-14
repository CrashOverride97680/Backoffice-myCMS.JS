import { Component } from '@angular/core';
import { HttpListImageBase } from "../../../../core/interceptors/http.interceptor";
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
      imgName: {
        title: 'IMG FILE SAVED'
      },
      actions: {
        title: 'ACTIONS',
        type: 'html',
        filter: false,
        sort: false,
        valuePrepareFunction: (cell:string, row: HttpListImageBase) => {
          return `<a href="${environment.mediaEntrypoint}/media/${row.imgName}" class="text-white btn btn-success" target="_blank">View</a>`
        }
      }
    }
  };
  public total = 0;
  public source: HttpListImageBase[] = [];
  public view = true;
  constructor(
    private api: HttpService
  ) {
    const token: string = localStorage.getItem('token') || '';
    forkJoin([
      this.api.getListImagesUploadedBase(token),
      this.api.getAllImagesBase(token)
    ]).subscribe(res => {
      this.total = res[0].count;
      this.source = res[1];
      console.log(this.source);
      this.view = false;
    });
  }
}
