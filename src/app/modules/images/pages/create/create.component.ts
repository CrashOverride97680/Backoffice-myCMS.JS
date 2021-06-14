import { Component } from '@angular/core';
import { HttpService } from '../../../../core/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public view: boolean = false;
  public file: string = '';
  public uploadForm: FormGroup;
  public imageSrc: string = '';
  public problemAPI: boolean = false;
  public successAPI: boolean = false;

  constructor(
    private api: HttpService,
    private fb: FormBuilder
  ) {
    this.uploadForm = this.fb.group({
      images: ['', Validators.required],
      names: ['', Validators.required]
    });
  }

  onFileSelect($event: any) {
    this.view = true;
    const reader = new FileReader();
    if($event.target.files && $event.target.files.length) {
      const files = $event.target.files[0];
      reader.readAsDataURL(files);
      reader.onload = () => {
        this.view = false;
        this.file = files.name;
        this.uploadForm.patchValue({
          images: reader.result,
          names: files.name
        });
      };
    }
  }

  upload() {
    const token: string = localStorage.getItem('token') || '';
    this.view = true;
    this.api.uploadImageBase(token, this.uploadForm.value).subscribe({
        next: res => {
          this.view = false;
          this.successAPI = true;
          this.uploadForm.reset();
          this.file = '';
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setTimeout(() => {
            this.successAPI = false;
          }, 5000);
        },
        error: e => {
          this.problemAPI = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          setTimeout(() => {
            this.problemAPI = false;
          }, 5000);
        }
      });
  }
}
