import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateComponent } from './pages/create/create.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './components/editor/editor.component';
import { GeninfoComponent } from './components/geninfo/geninfo.component';
import { CategoryComponent } from './components/category/category.component';
import { TypeComponent } from './components/type/type.component';
import { TitleComponent } from './components/title/title.component';
import { DescriptionComponent } from './components/description/description.component';
import { ImportantComponent } from './components/important/important.component';
import { SendbuttonComponent } from './components/sendbutton/sendbutton.component';

@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    EditorComponent,
    GeninfoComponent,
    CategoryComponent,
    TypeComponent,
    TitleComponent,
    DescriptionComponent,
    ImportantComponent,
    SendbuttonComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    AngularEditorModule
  ]
})
export class PostsModule { }
