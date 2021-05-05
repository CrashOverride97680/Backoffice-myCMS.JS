import {Component, Input} from '@angular/core';

@Component({
  selector: 'pages-button-create',
  template: `
    <a [routerLink]="router" class="btn_add_internal" [ngClass]="class">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent {
  @Input() class = '';
  @Input() router = [''];
}
