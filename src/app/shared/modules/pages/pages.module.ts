import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePagesComponent } from './components/title-pages/title-pages.component';
import { CardsPagesComponent } from './components/cards/cards.component';
import { TablePagesComponent } from './components/table/tablepages.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    TitlePagesComponent,
    CardsPagesComponent,
    TablePagesComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  exports: [
    TitlePagesComponent,
    CardsPagesComponent,
    TablePagesComponent
  ]
})
export class PagesModule { }
