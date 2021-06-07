import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-description',
  template: `
    <div class="mt-1 form-group">
      <label for="description">Description *</label>
      <textarea [value]="value" (change)="write($event)" style="min-height: 200px"  class="d-block w-100 mt-2" placeholder="Write title website, is important for Seo..." title="Write description website, is important for Seo..."></textarea>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionComponent),
      multi: true
    }
  ],
  styles: ['']
})
export class DescriptionComponent implements ControlValueAccessor {
  public value = '';
  onTouched: () => void;
  onChange: any = () => {};
  constructor() {
    this.onTouched = () => {};
  }
  write($event: Event) {
    this.value = ($event.target as HTMLTextAreaElement).value;
    this.onTouched();
    this.onChange(this.value);
  }
  writeValue(val: string) {
    this.value = val;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
