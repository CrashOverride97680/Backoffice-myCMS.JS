import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: `
    <hr class="divider" style="margin-bottom: 0 !important;">
        <ng-content></ng-content>
    <hr class="divider" style="margin-bottom: 0 !important;">
  `,
  styles: ['.divider { border-top: 1px solid rgba(255,255,255,.15); margin: 0 1rem 1rem}']
})
export class DividerComponent {}
