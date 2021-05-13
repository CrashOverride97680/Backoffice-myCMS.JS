import { Component } from '@angular/core';

@Component({
  selector: 'app-important',
  template: `
    <div class="mt-1 form-group">
      <label for="important">Important *</label>
      <select aria-label="Select important website page..." class="d-block mt-2 p-2 w-100" id="important" name="important" ngModel required>
        <option value="-">Select important website...</option>
        <option *ngFor='let in of counter(20) ;let i = index'>{{i + 1}}</option>
      </select>
    </div>
  `,
  styles: ['']
})
export class ImportantComponent {
  counter(i: number) {
    return new Array(i);
  }
}
