import { Component } from '@angular/core';
import { AsideService } from './core/static/components/aside/services/aside.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CMS';
  public view = false;
  constructor(
    private asideData: AsideService
  ) {
    this.asideData.data$.subscribe(d => this.view = d.view);
  }
}
