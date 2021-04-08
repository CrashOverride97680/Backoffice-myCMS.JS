import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ColComponent } from './components/col/col.component';
import { RowComponent } from './components/row/row.component';
import { ImageComponent } from './components/image/image.component';
@NgModule({
  declarations: [
    ContainerComponent,
    ColComponent,
    RowComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        ContainerComponent,
        ColComponent,
        ImageComponent,
        RowComponent
    ]
})
export class SharedModule { }
