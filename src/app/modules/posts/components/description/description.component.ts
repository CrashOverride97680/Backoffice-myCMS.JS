import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
    <div class="mt-1 form-group">
      <label for="description">Description *</label>
      <textarea style="min-height: 200px" class="d-block w-100 mt-2" aria-describedby="inputGroup-sizing-sm" id="description" placeholder="Write title website, is important for Seo..." name="description" title="Write description website, is important for Seo..." required></textarea>
    </div>
  `,
  styles: ['']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
