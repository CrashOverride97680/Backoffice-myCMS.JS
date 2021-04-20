import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottomlogout',
  template: `
    <div class="dashlink iconMarg bottom" (click)="logout($event)">
      <a routerLink="#" title="Logout"><i class="fas fa-sign-out-alt icon"></i>Logout</a>
    </div>
  `,
  styleUrls: ['./bottomlogout.component.scss']
})
export class BottomlogoutComponent {
  constructor(
    private route: Router
  ) {
  }
  logout($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
