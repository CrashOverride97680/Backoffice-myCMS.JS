import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'category-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent {
  public checkbox = false;
  public problemAPI = false;
  public successAPI = false;
  public number: number = 0;

  send(form: NgForm) {
    const token: string = localStorage.getItem('token') || '';
    this.api.createNewCategory(token, form.value).subscribe(
      {
        next: (data) => {
          form.resetForm();
          this.successAPI = true;
          setTimeout(() => {
            this.successAPI = false
          }, 4000);
        },
        error: err => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          setTimeout(() => {
            this.problemAPI = true
          }, 4000);
        }
      }
    );
  }
  constructor(
    private api: HttpService
  ) { }
}
