import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottomlogout',
  template: `
    <div class="dashlink iconMarg bottom">
      <a routerLink="#" title="Logout"><i class="fas fa-sign-out-alt icon"></i>Logout</a>
    </div>
  `,
  styleUrls: ['./bottomlogout.component.scss']
})
export class BottomlogoutComponent {}
