import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../../core/http/http.service';
import { Router } from '@angular/router';
import { AsideService } from '../../../../core/static/components/aside/services/aside.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public error: boolean = false;
  @Output() changeSpinner = new EventEmitter<void>();

  constructor(
    private api: HttpService,
    private route: Router,
    private aside: AsideService
  ) {}

  send(form: NgForm): void {
    this.changeSpinner.emit();
    this.api.login(form.value).subscribe({
      next: (data) => {
        this.changeSpinner.emit();
        localStorage.setItem('token', data.token);
        this.route.navigate(['/', 'dashboard']);
      },
      error: e => {
        console.log('Error message:', e);
        this.error = true;
        setTimeout(() => this.error = false, 3000);
        this.changeSpinner.emit();
      }
    });
  }
}
