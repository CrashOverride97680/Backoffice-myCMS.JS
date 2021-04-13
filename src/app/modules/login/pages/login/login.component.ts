import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public spinner = false;

  public changeSpinner(): void {
    this.spinner = !this.spinner;
  }
}
