import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { DividerComponent } from './components/divider/divider.component';
import { AsideLogoComponent } from './components/aside-logo/aside-logo.component';
@NgModule({
  declarations: [
    AsideComponent,
    DividerComponent,
    AsideLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
