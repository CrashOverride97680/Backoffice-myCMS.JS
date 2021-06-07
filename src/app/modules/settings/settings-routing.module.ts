import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from "../../core/guards/admin-guard/admin.guard";
import { SettingsComponent } from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SettingsComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
