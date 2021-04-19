import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { DividerComponent } from './components/divider/divider.component';
import { AsideLogoComponent } from './components/aside-logo/aside-logo.component';
import { DashlinkComponent } from './components/dashlink/dashlink.component';
import { RouterModule } from '@angular/router';
import { NavgroupComponent } from './components/navgroup/navgroup.component';
import { BottomlogoutComponent } from './components/bottomlogout/bottomlogout.component';
@NgModule({
  declarations: [
    AsideComponent,
    DividerComponent,
    AsideLogoComponent,
    DashlinkComponent,
    NavgroupComponent,
    BottomlogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
