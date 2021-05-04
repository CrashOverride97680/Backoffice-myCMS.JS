import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [PostsComponent, CreateComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
