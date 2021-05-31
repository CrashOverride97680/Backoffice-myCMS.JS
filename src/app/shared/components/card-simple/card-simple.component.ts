import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-simple',
  template: `
    <div class="card" [ngClass]="cardClass">
      <h2 *ngIf="title" class="card-header" [ngClass]="titleClass">{{ title }}</h2>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ['']
})
export class CardSimpleComponent {
  @Input() title = '';
  @Input() cardClass = '';
  @Input() titleClass = '';
}
