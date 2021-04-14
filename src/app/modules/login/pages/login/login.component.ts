import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public spinner = false;

  constructor(
    private route: Router
  ) {}

  public changeSpinner(): void {
    this.spinner = !this.spinner;
  }
}
