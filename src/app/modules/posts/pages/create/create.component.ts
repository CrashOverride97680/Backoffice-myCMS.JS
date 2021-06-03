import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {File} from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(
    private fb: FormBuilder
  ) {
    this.post = this.fb.group({
      lang: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      type: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      title: ['', Validators.required],
      seo: this.fb.group({
        description: ['', Validators.required]
      }),
      content: ['', Validators.required],
      category: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])]
    });
  }
  public post: FormGroup;
  public problemAPI = false;

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
      upload: function(file: any) {
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

  send(){
    console.log('POSTS:', this.post.value);
  }
}
