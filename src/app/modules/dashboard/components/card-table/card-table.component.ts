import {Component, Input} from '@angular/core';
import { HttpPostInterceptor } from '../../../../core/interceptors/http.interceptor';
@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent {
  @Input() posts: HttpPostInterceptor[] = [];
}
