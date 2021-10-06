import { PreloadingStrategy, Route } from '@angular/router';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';

export class AppCustomPreload implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : Observable.of(null);
  }
}
