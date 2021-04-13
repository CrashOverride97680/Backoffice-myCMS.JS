import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public spinner = false;

  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {
    this.changeSpinner();
    const token: (string | null) = localStorage?.getItem('token') || null;
    if (token == null) {
      localStorage.clear();
      this.changeSpinner();
    }
    else {
      this.changeSpinner();
      this.route.navigate(['/', 'dashboard']);
    }
  }

  public changeSpinner(): void {
    this.spinner = !this.spinner;
  }
}
