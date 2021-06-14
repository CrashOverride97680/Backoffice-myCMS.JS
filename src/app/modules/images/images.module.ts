import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './pages/images/images.component';
import { SharedModule } from "../../shared/shared.module";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CreateComponent } from './pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ImagesComponent,
    CreateComponent
  ],
    imports: [
        CommonModule,
        ImagesRoutingModule,
        SharedModule,
        AngularFileUploaderModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ImagesModule { }
