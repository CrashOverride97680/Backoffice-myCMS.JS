import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsidePrefixInterceptor } from '../../../../interceptors/ui-prefix.interceptor';
@Injectable({
  providedIn: 'root'
})
export class AsideService {
  private _asideData = new BehaviorSubject<AsidePrefixInterceptor>({
    view: false
  });
  public data$ = this._asideData.asObservable();
  changeAsideData(data: AsidePrefixInterceptor): void {
    this._asideData.next(data);
  }
}
