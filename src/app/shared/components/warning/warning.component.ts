import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <div class="alert alert-warning" role="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: ['']
})
export class WarningComponent {}
