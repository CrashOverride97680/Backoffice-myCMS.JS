import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from "../../core/guards/admin-guard/admin.guard";
import { ImagesComponent } from "./pages/images/images.component";
import { CreateComponent } from "./pages/create/create.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ImagesComponent, canActivate: [AdminGuard] },
      { path: 'create', component: CreateComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
