import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { LeftboxComponent } from "./components/leftbox/leftbox.component";
import { FormsModule } from '@angular/forms';
import { FormComponent } from "./components/form/form.component";
@NgModule({
  declarations: [
    LoginComponent,
    LeftboxComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
