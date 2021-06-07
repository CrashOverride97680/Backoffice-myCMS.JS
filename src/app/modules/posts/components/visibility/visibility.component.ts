import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VisibilityComponent),
      multi: true
    }
  ]
})
export class VisibilityComponent implements ControlValueAccessor {
  @Input() value = false;
  public onTouched: () => void;
  public onChanged: any = () => {};

  constructor() {
    this.onTouched = () => {};
  }

  writeValue(value: boolean) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  change($event: Event) {
    this.value = ($event.target as HTMLInputElement).checked;
    this.onChanged(this.value);
    this.onTouched();
  }
}
