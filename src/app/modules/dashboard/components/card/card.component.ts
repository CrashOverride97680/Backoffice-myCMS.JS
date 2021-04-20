import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="mr-2">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title h6 font-weight-lighter text-uppercase" [ngClass]="titleClass">{{ title }}</h2>
          <p class="card-text h5 mb-0 font-weight-bold text-gray-800" [ngClass]="contentClass">{{ content }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ['']
})
export class CardComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() titleClass = '';
  @Input() contentClass = '';
}
