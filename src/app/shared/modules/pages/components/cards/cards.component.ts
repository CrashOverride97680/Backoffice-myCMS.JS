import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: ['']
})
export class CardsPagesComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() titleClass = '';
  @Input() contentClass = '';
}
