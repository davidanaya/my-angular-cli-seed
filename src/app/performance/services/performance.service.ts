import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const DEFAULT_LAYOUT = [
  {
    name: 'executive-dashboard',
    widgets: ['widget1', 'widget2']
  }
];

@Injectable()
export class PerformanceService {
  constructor() {}

  getDashboardLayout(): Observable<any> {
    return Observable.of(DEFAULT_LAYOUT);
  }
}
