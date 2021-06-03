import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-important',
  template: `
    <div class="mt-1 form-group">
      <label for="important">Important *</label>
      <select [(ngModel)]="value" aria-label="Select important website page..." class="d-block mt-2 p-2 w-100">
        <option value="-">Select important website...</option>
        <option *ngFor='let in of counter(20) ;let i = index'>{{i + 1}}</option>
      </select>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImportantComponent),
      multi: true
    }
  ],
  styles: ['']
})
export class ImportantComponent implements ControlValueAccessor {
  public value = '-';

  onTouched: () => void;
  onChanged: any = () => {};

  constructor() {
    this.onTouched = () => {};
  }

  counter(i: number) {
    return new Array(i);
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

  change($event: Event) {
    this.onTouched();
    this.onChanged(($event.target as HTMLSelectElement).value);
  }
}
