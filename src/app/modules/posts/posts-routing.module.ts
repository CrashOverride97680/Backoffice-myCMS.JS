import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../core/guards/admin-guard/admin.guard';
import { PostsComponent } from './pages/posts/posts.component';
const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
