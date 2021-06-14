import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../../core/http/http.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  template: `
    <pages-box
      [title]="'Update credentials'"
    >
      <app-alert *ngIf="problemAPI">
        User not modifyed reload page, if persist problem contact administrator.
      </app-alert>

      <app-success *ngIf="successAPI">
        <i class="fas fa-check-circle"></i> User modified correctly.
      </app-success>

      <form [formGroup]="user" (ngSubmit)="send()">
        <div
          class="form-group mt-3"
        >
          <input
            type="email"
            formControlName="email"
            class="form-control"
            placeholder="Insert email..."
          >
        </div>

        <div
          class="form-group mt-3"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Insert username user..."
            formControlName="username"
          >
        </div>

        <div
          class="form-group mt-3"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Insert name user..."
            formControlName="name"
          >
        </div>

        <div
          class="form-group mt-3"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Insert surname user..."
            formControlName="surname"
          >
        </div>
        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary" [disabled]="user.invalid"><i class="fas fa-pen"></i> Update info</button>
        </div>
      </form>
    </pages-box>
  `,
  styles: ['']
})
export class ProfileComponent {
  public user: FormGroup;
  public problemAPI = false;
  public successAPI = false;
  constructor(
    private api: HttpService,
    private fb: FormBuilder
  ) {
    this.user = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });
    const token: string = localStorage.getItem('token') || '';
    this.api.getUserInfoAdmin(token).subscribe({
      next: res => {
        this.user.get('email')?.setValue(res.email);
        this.user.get('username')?.setValue(res.username);
        this.user.get('name')?.setValue(res.name);
        this.user.get('surname')?.setValue(res.surname);
      },
      error: err => {
        this.problemAPI = true;
        setTimeout(() => {
          this.problemAPI = false;
        }, 3000);
      }
    });
  }

  send() {
    const token: string = localStorage.getItem('token') || '';
    this.api.modifyUsers(token, this.user.value).subscribe({
      next: res => {
        this.successAPI = true;
        setTimeout(() => {
          this.successAPI = false;
        }, 3000);
      },
      error: err => {
        this.problemAPI = true;
        setTimeout(() => {
          this.problemAPI = false;
        }, 3000);
      }
    });
  }
}
