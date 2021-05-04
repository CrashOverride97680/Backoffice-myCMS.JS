import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../core/guards/admin-guard/admin.guard';
import { PostsComponent } from './pages/posts/posts.component';
import { CreateComponent } from './pages/create/create.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: PostsComponent, canActivate: [AdminGuard] },
      { path: 'create', component: CreateComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
