import {Component, Input} from '@angular/core';

@Component({
  selector: 'pages-button-create',
  template: `
    <div class="btn-adds" [ngClass]="class!">
      <a [routerLink]="router" class="btn_add_internal">
        <ng-content></ng-content>
      </a>
    </div>
  `,
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent {
  @Input() class = '';
  @Input() router = [''];
  @Input() title = '';
}
