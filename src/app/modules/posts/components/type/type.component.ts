import { Component } from '@angular/core';

@Component({
  selector: 'app-type',
  template: `
    <div class="mt-2 form-group">
      <label for="type">Type *</label>
      <select aria-label="Select type website..." id="type" name="type" class="d-block mt-2 w-100 p-2" ngModel required>
        <option value="-">Select type website...</option>
        <option value="post">Post</option>
        <option value="article">Article</option>
      </select>
    </div>
  `,
  styles: ['']
})
export class TypeComponent {}
