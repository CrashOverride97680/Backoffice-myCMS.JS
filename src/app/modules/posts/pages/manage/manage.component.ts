import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../../../../core/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  public id = '';
  public important: any = '-';
  public category: any = '-';
  public checkbox = false;
  constructor(
    private fb: FormBuilder,
    private api: HttpService,
    private router: ActivatedRoute
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

    const token: string = localStorage.getItem('token') || '';
    this.id = this.router.snapshot.params.id;
    this.api.getSinglePost(token, this.id).subscribe({
      next: res => {
        this.important = res.important;
        this.category = res.category[0].codeCategory;
        this.post.get('lang')?.setValue(res.lang);
        this.post.get('type')?.setValue(res.type);
        this.post.get('title')?.setValue(res.title);
        this.post.get(['seo', 'description'])?.setValue(res.seo.description);
        this.post.get('content')?.setValue(res.content);
        this.post.get(['category', 'codeCategory'])?.setValue(res.category[0].codeCategory);
        this.post.get('important')?.setValue(res.important);
        this.post.get('visible')?.setValue(res.visible);
      },
      error: err => {
        this.problemAPI = true;
      }
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
    this.post.addControl('codPosts', new FormControl('', Validators.required));
    this.post.get('codPosts')?.setValue(this.id);
    console.log(this.post.value);
    this.api.modifyPost(token, this.post.value)
      .subscribe(res =>
      {
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
