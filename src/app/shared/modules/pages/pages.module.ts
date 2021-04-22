import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePagesComponent } from './components/title-pages/title-pages.component';

@NgModule({
  declarations: [
    TitlePagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitlePagesComponent
  ]
})
export class PagesModule { }
