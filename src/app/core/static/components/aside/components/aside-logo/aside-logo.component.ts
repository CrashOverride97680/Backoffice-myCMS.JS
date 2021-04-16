import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-logo',
  template: `
    <div class="logoHome d-flex align-items-center justify-content-center">
        <i class="fas fa-rocket"></i>
        <strong>myCMS.JS</strong>
    </div>`,
  styleUrls: ['./aside-logo.component.scss']
})
export class AsideLogoComponent {}
