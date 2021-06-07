import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'images', loadChildren: () => import('./modules/images/images.module').then(m => m.ImagesModule)
  },
  {
    path: 'videos', loadChildren: ()=> import('./modules/videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: 'generals', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
