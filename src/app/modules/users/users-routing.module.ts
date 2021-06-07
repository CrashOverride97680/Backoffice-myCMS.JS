import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from "../../core/guards/admin-guard/admin.guard";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
