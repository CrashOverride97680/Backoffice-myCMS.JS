import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="mt-2 form-group">
      <label for="title">Title *</label>
      <input type="text" class="form-control mt-2 p-2" aria-describedby="inputGroup-sizing-sm" id="title" placeholder="Write title website, is important for Seo..." name="title" ngModel title="Write title website, is important for Seo..." required>
    </div>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
