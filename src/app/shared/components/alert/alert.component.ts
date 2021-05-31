import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-danger" role="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: ['']
})
export class AlertComponent {}
