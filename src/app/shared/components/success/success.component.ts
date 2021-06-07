import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
    <div class="alert alert-success" role="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: ['']
})
export class SuccessComponent {}
