import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'category-form-mod-del',
  templateUrl: './form-mod-del.component.html',
  styleUrls: ['./form-mod-del.component.scss']
})
export class FormModDelComponent {
  public successAPI = false;
  public problemAPI = false;
  public id = '';
  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private api: HttpService
  ) {
    this.category = this.fb.group({
      codCategory: this.id,
      name: ['', Validators.required],
      titleSeo: ['', Validators.required],
      important: ['', Validators.required],
      description: ['', Validators.required],
      visible: [false, Validators.required]
    });
    const token: string = localStorage.getItem('token') || '';
    this.id = this.router.snapshot.params.id;
    this.api.getSingleCategory(token, this.id).subscribe({
      next: res => {
        this.category.get('name')?.setValue(res.name);
        this.category.get('titleSeo')?.setValue(res.titleSEO);
        this.category.get('important')?.setValue(res.important);
        this.category.get('description')?.setValue(res.description);
        this.category.get('visible')?.setValue(res.visible);
      },
      error: err => {
        this.problemAPI = true;
      }
    });
  }
  public category: FormGroup;
  send() {
    const token: string = localStorage.getItem('token') || '';
    this.category.addControl('codCategory', new FormControl('', Validators.required));
    this.category.get('codCategory')?.setValue(this.id);
    this.
      api
      .modifyCategory(token, this.category.value)
      .subscribe({
        next: e => {
          this.successAPI = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setTimeout(() => this.successAPI = false, 5000);
        },
        error: e => {
          this.problemAPI = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setTimeout(() => this.problemAPI = false, 5000);
        }
      });
  }
}
