import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(
    private fb: FormBuilder,
    private api: HttpService
  ) {
    this.post = this.fb.group({
      lang: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      type: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      title: ['', Validators.required],
      seo: this.fb.group({
        description: ['', Validators.required]
      }),
      content: ['', Validators.required],
      category: this.fb.group({
        codeCategory: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      }),
      important: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      visible: [false, Validators.required]
    });
  }

  public post: FormGroup;
  public problemAPI = false;
  public warningAPI = false;
  public successAPI = false;

  public editorConfig: any = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '50vh',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      defaultFontSize: '',
      upload(file: any) {
        console.log(file);
      },
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'http://localhost/api/imgUrl',
      uploadWithCredentials: true,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
        [
          'fontName',
          'strikeThrough',
          'subscript',
          'superscript'
        ],
        [
          'fontSize',
          'insertHorizontalRule',
          'textColor',
          'backgroundColor'
        ]
      ]
    };

  warningChange() {
    this.warningAPI = true;
  }

  send () {
    const token: string = localStorage.getItem('token') || '';
    this.api.createPost(token, this.post.value)
      .subscribe(res =>
      {
        this.post.reset();
        this.successAPI = true;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
          this.successAPI = false;
        }, 5000);
      });
  }
}
