import { Component, Input } from '@angular/core';
import {HttpGetAllCategory} from '../../../../core/interceptors/http.interceptor';

@Component({
  selector: 'app-category',
  template: `
      <div class="mt-2 form-group">
        <label for="category">Category *</label>
        <select aria-label="Select category website..." id="category" name="category" class="d-block mt-2 w-100 p-2" ngModel required>
          <option value="-">Select category website...</option>
          <option *ngFor="let categorydata of listCategory">{{categorydata.name}}</option>
        </select>
      </div>
  `,
  styles: ['']
})
export class CategoryComponent {
  @Input() listCategory: HttpGetAllCategory[] = [];
}
