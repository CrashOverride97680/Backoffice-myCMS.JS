import { Component } from '@angular/core';
import {NgForm, Validators} from "@angular/forms";
import { HttpService } from "../../../../core/http/http.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-password',
  template: `
    <pages-box
      [title]="'Update password'"
    >
      <app-alert *ngIf="problemAPI">
        Password not modified, if problem persist contact administrator.
      </app-alert>

      <app-success *ngIf="successAPI">
        <i class="fas fa-check-circle"></i> Password changed correctly.
      </app-success>


      <form [formGroup]="fg" (ngSubmit)="send()">
        <div
          class="form-group mt-3"
        >
          <input
            [type]="fg.value.checkBox == true ? 'text' : 'password'"
            placeholder="Insert new password"
            title="Insert new password"
            formControlName="newPassword"
            class="form-control"
          >

          <div class="form-check mt-3">
            <input class="form-check-input" type="checkbox" (change)="change($event)">
            <label class="form-check-label" for="flexCheckDefault">
              View password
            </label>
          </div>

        </div>
        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary text-capitalize" [disabled]="fg.invalid"><i class="fas fa-exchange-alt"></i> change</button>
        </div>
      </form>
    </pages-box>
  `,
  styles: ['']
})
export class PasswordComponent {

  public problemAPI = false;
  public successAPI = false;
  public fg: FormGroup;
  constructor(
    private api: HttpService,
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      newPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      checkBox: false
    });
  }

  change($event: Event) {
    const change = this.fg.get('checkBox')?.value;
    this.fg.get('checkBox')?.setValue(!change);
  }

  send() {
    const token: string = localStorage.getItem('token') || '';
    this.api.changePassword(token, this.fg.value).subscribe({
      next: () => {
        this.successAPI = true;
        setTimeout(() => {
          this.successAPI = false;
        }, 3000)
        this.fg.reset();
      },
      error: e => {
        this.problemAPI = true;
        setTimeout(() => {
          this.problemAPI = false;
        }, 3000)
        this.fg.reset();
      }
    });
  }

}
