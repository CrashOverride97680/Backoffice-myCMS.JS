import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-col',
  template:`
    <div
      [ngClass]="
        {
            'col-1': type === 1,
            'col-2': type === 2,
            'col-3': type === 3,
            'col-4': type === 4,
            'col-5': type === 5,
            'col-6': type === 6,
            'col-7': type === 7,
            'col-8': type === 8,
            'col-9': type === 9,
            'col-10': type === 10,
            'col-11': type === 11,
            'col-12': type === 12
        }"
      [class]="class"
      [ngStyle]="style"
    >
        <ng-content></ng-content>
    </div>
`,
  styles: []
})
export class ColComponent  {
  @Input() type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 12;
  @Input() class: string = '';
  @Input() style: Object = {};
}
