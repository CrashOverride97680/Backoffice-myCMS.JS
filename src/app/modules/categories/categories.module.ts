import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateComponent } from './pages/create/create.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormModDelComponent } from './components/form-mod-del/form-mod-del.component';
import { ManageComponent } from './pages/manage/manage.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CreateComponent,
    FormCreateComponent,
    FormModDelComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CategoriesModule { }
