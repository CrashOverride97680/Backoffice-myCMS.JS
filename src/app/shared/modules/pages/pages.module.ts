import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePagesComponent } from './components/title-pages/title-pages.component';
import { CardsPagesComponent } from './components/cards/cards.component';
import { TablePagesComponent } from './components/table/tablepages.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonCreateComponent } from './components/button-create/button-create.component';
import { RouterModule } from '@angular/router';
import { PagesBoxComponent } from './components/pages-box/pages-box.component';

@NgModule({
  declarations: [
    TitlePagesComponent,
    CardsPagesComponent,
    TablePagesComponent,
    ButtonCreateComponent,
    PagesBoxComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    RouterModule
  ],
  exports: [
    TitlePagesComponent,
    CardsPagesComponent,
    TablePagesComponent,
    ButtonCreateComponent,
    PagesBoxComponent
  ]
})
export class PagesModule { }
