import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-title',
  template: `
    <div class="mt-2 form-group">
      <label for="title">Title *</label>
      <input type="text" (input)="write($event)" [value]="value" class="form-control mt-2 p-2" aria-describedby="inputGroup-sizing-sm" id="title" placeholder="Write title website, is important for Seo..." name="title" ngModel title="Write title website, is important for Seo..." required>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TitleComponent),
      multi: true
    }
  ],
  styles: ['']
})
export class TitleComponent implements ControlValueAccessor {
  public value = '';
  onTouched: () => void;
  onChanged: any = () => {};
  constructor() {
    this.onTouched = () => {};
  }

  write($event: Event): void {
    this.value = ($event.target as HTMLInputElement).value;
    this.onChanged(this.value);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  writeValue(val: string) {
    this.value = val;
  }
}
