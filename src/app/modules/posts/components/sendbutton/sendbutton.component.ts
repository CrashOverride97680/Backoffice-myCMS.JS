import { Component } from '@angular/core';

@Component({
  selector: 'app-sendbutton',
  template: `
    <div class="mt-3">
      <button type="submit" class="btn btn-primary btn-lg w-100">
        <i class="fas fa-feather"></i>
        Write post
      </button>
    </div>
  `,
  styleUrls: ['./sendbutton.component.scss']
})
export class SendbuttonComponent { }
