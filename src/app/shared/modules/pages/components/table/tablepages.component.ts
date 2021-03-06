import {Component, Input} from '@angular/core';

@Component({
  selector: 'pages-table',
  templateUrl: './tablepages.component.html',
  styleUrls: ['./tablepages.component.scss']
})
export class TablePagesComponent {
  @Input() title = '';
  @Input() titleClass = '';
  @Input() bodyClass = '';
  @Input() settings = {};
  @Input() source = {};
}
