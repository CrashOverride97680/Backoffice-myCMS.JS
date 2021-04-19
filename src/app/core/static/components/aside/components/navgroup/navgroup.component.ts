import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navgroup',
  template: `
    <div class="nav-group">
      <strong>{{titleGroup | titlecase}}</strong>
      <app-dashlink [routes]="routes" [icons]="icons"></app-dashlink>
    </div>
  `,
  styleUrls: ['./navgroup.component.scss']
})
export class NavgroupComponent {
  @Input() titleGroup: string = '';
  @Input() routes: string[] = [''];
  @Input() icons: string[] = [''];
;}
