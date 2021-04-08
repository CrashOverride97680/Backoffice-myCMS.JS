import { Component } from '@angular/core';

@Component({
  selector: 'app-row',
  template: `
    <div class="row">
        <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class RowComponent {}
