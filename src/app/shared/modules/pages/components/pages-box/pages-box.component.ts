import {Component, Input} from '@angular/core';

@Component({
  selector: 'pages-box',
  template: `
    <div class="card">
      <h2
        class="card-header h5 text-uppercase font-weight-bold text-primary"
        *ngIf="title !== ''"
        [ngClass]="titleClass"
      >
        {{title}}
      </h2>
      <div
        class="card-body"
        [ngClass]="classBody"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ['']
})
export class PagesBoxComponent {
  @Input() titleClass = '';
  @Input() title = '';
  @Input() classBody = '';
}
