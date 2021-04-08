import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div
      [ngClass]="{
        'container': type === 'container',
        'container-sm': type === 'sm',
        'container-md': type === 'md',
        'container-lg': type === 'lg',
        'container-xl': type === 'xl',
        'container-xxl': type === 'xxl',
        'container-fluid': type === 'fluid'
      }"

      [class]="class"
      [ngStyle]="style"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ContainerComponent {
  @Input() type: 'container' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' = 'container';
  @Input() style: Object = {};
  @Input() class: string = '';
}
