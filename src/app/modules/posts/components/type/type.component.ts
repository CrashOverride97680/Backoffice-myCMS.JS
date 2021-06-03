import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-type',
  template: `
    <div class="mt-2 form-group">
      <label for="type">Type *</label>
      <select [(ngModel)]="value" (change)="change($event)" aria-label="Select type website..." id="type" name="type" class="d-block mt-2 w-100 p-2">
        <option value="-">Select type website...</option>
        <option value="post">Post</option>
        <option value="article">Article</option>
      </select>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeComponent),
      multi: true
    }
  ],
  styles: ['']
})
export class TypeComponent implements ControlValueAccessor {

  onTouched: () => void;
  onChanged: any = () => {};
  @Input() value: string = '-';
  constructor() {
    this.onTouched = () => {};
  }

  change($event: Event) {
    this.onTouched();
    this.onChanged(($event.target as HTMLSelectElement).value);
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: string) {
    this.value = val;
  }

}

