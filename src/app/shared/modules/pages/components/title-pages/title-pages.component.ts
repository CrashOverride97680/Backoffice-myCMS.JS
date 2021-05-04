import {Component, Input} from '@angular/core';

@Component({
  selector: 'pages-title',
  template: `
    <h1 class="h3 mb-4 font-weight-normal text-gray-800 text-capitalize">
      <ng-content></ng-content>
    </h1>
  `,
  styles: ['']
})
export class TitlePagesComponent {}
