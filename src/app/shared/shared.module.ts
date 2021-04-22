import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ColComponent } from './components/col/col.component';
import { RowComponent } from './components/row/row.component';
import { ImageComponent } from './components/image/image.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PagesModule } from './modules/pages/pages.module';

@NgModule({
  declarations: [
    ContainerComponent,
    ColComponent,
    RowComponent,
    ImageComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
    exports: [
        ContainerComponent,
        ColComponent,
        ImageComponent,
        RowComponent,
        SpinnerComponent,
        PagesModule
    ]
})
export class SharedModule { }
