import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-image',
  template: `
    <img
      [src]="'../../../../assets/images/' + path"
      [attr.height]="height !== 0 ? height : null"
      [attr.width]="width !== 0 ? width : null"
      [attr.title]="title ? title : null"
      [ngClass]="class"
      [ngStyle]="style"
    />
  `,
  styles: []
})
export class ImageComponent {
  @Input() path: string = '';
  @Input() height: number = 0;
  @Input() class: string = '';
  @Input() width: number = 0;
  @Input() title: string = '';
  @Input() style: Object = {};
}
