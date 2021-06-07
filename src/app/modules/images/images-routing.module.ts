import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from "../../core/guards/admin-guard/admin.guard";
import { ImagesComponent } from "./pages/images/images.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ImagesComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
