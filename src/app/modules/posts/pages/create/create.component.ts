import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup, NgForm} from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public post: FormGroup;
  public problemAPI: boolean = false;
  constructor(
    private fb: FormBuilder
  ) {
    this.post = this.fb.group({
      editor: ['', Validators.required],
      geninfo: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])],
      category: ['-', Validators.compose([Validators.pattern(/[^-]/), Validators.required])]
    });
  }

  send(){
    console.log("POSTS:", this.post.value);
  }

  public editorConfig: AngularEditorConfig = {
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
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
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
}
