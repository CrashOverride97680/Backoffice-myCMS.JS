import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-geninfo',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeninfoComponent ),
      multi: true
    }
  ],
  templateUrl: './geninfo.component.html',
  styleUrls: ['./geninfo.component.scss']
})

export class GeninfoComponent implements ControlValueAccessor {
  constructor() {
    this.onTouched = () => {};
  }
  onTouched: () => void;
  @Input() lang = '-';
  onChanged: any = () => {};

  change($event: any) {
    this.onTouched();
    this.onChanged($event.target.value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(lang: string): void {
    this.lang = lang;
  }

}
