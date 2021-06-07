import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateComponent } from './pages/create/create.component';
import { AdminGuard } from '../../core/guards/admin-guard/admin.guard';
import { ManageComponent } from './pages/manage/manage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CategoriesComponent, canActivate: [AdminGuard] },
      { path: 'create', component: CreateComponent, canActivate: [AdminGuard] },
      { path: 'manage/:id', component: ManageComponent, canActivate: [AdminGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
