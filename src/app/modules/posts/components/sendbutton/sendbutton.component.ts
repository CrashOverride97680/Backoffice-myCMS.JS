import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sendbutton',
  template: `
    <div class="mt-3">
      <button type="submit" [disabled]="disabled" class="btn btn-primary btn-lg w-100">
        <i class="fas fa-feather"></i>
        Write post
      </button>
    </div>
  `,
  styles: ['']
})
export class SendbuttonComponent {
  @Input() disabled = false;
}
