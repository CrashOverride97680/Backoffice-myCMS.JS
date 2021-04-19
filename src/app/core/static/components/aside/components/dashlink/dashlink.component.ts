import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashlink',
  template: `
    <div class="dashlink iconMarg" *ngFor="let route of routes; index as i">
      <a routerLink="{{route | lowercase}}" [title]="'Go to ' + route.toLowerCase()"><i class="fas icon" [ngClass]="icons[i]"></i>{{route | titlecase}}</a>
    </div>
  `,
  styleUrls: ['./dashlink.component.scss']
})
export class DashlinkComponent {
  @Input() routes: string[] = [''];
  @Input() icons: string[] = [''];
}
