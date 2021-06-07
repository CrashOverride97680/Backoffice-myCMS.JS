import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from "../../core/guards/admin-guard/admin.guard";
import { VideosComponent } from "./pages/videos/videos.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: VideosComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
