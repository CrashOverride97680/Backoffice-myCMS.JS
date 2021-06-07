import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateComponent } from './pages/create/create.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { GeninfoComponent } from './components/geninfo/geninfo.component';
import { CategoryComponent } from './components/category/category.component';
import { TypeComponent } from './components/type/type.component';
import { TitleComponent } from './components/title/title.component';
import { DescriptionComponent } from './components/description/description.component';
import { ImportantComponent } from './components/important/important.component';
import { SendbuttonComponent } from './components/sendbutton/sendbutton.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { ManageComponent } from './pages/manage/manage.component';

@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    GeninfoComponent,
    CategoryComponent,
    TypeComponent,
    TitleComponent,
    DescriptionComponent,
    ImportantComponent,
    SendbuttonComponent,
    VisibilityComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    AngularEditorModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
