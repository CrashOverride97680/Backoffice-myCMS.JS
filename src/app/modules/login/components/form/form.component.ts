import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../../core/http/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() changeSpinner = new EventEmitter<void>();

  constructor(
    private api: HttpService,
    private route: Router
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
        this.changeSpinner.emit();
      }
    });
  }
}
