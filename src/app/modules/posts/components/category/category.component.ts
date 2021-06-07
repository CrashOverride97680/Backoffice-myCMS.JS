import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { HttpGetAllCategory } from '../../../../core/interceptors/http.interceptor';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'app-category',
  template: `
      <div class="mt-2 form-group">
        <label for="category">Category *</label>
        <select [(ngModel)]="category" (change)="change($event)" aria-label="Select category website..." class="d-block mt-2 w-100 p-2">
          <option value="-">Select category website...</option>
          <option *ngFor="let categorydata of listCategory" [value]="categorydata._id">{{categorydata.name}}</option>
        </select>
      </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoryComponent),
      multi: true
    }
  ],
  styles: ['']
})
export class CategoryComponent implements ControlValueAccessor{
  constructor(
    private api: HttpService
  ) {
    this.onTouched = () => {};
    const token: string = localStorage.getItem('token') || '';
    this
      .api
      .getAllCategory(token)
      .subscribe({
        next: value => {
          this.listCategory = value;
        },
        error: () => this.ErrorApi.emit(true)
      });
  }
  @Input() listCategory: HttpGetAllCategory[] = [];
  @Output() ErrorApi: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  onTouched: () => void;
  @Input() category = '-';
  onChanged: any = () => {};

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  writeValue(category: string) {
    this.category = category;
  }

  change($event: Event) {
    this.category = ($event.target as HTMLSelectElement).value;
    this.onChanged(this.category);
    this.onTouched();
  }

}
