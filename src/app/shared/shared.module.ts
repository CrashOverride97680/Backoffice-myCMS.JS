import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ColComponent } from './components/col/col.component';
import { RowComponent } from './components/row/row.component';
import { ImageComponent } from './components/image/image.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    ContainerComponent,
    ColComponent,
    RowComponent,
    ImageComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        ContainerComponent,
        ColComponent,
        ImageComponent,
        RowComponent,
        SpinnerComponent
    ]
})
export class SharedModule { }
