import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ToastTranslateService } from 'lib/src/app/service/common/toast-translate.service';
import { LANGUAGE, CURRENT_LANG } from 'lib/src/app/common/define/language.define';

@Component({
  selector: 'mo-layout',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(
    private _toastTranslateService: ToastTranslateService,
    private _http: Http
  ) {
    let lang = CURRENT_LANG();
    if (!lang) {
      lang = LANGUAGE.DEFAULT;
    }
    this._toastTranslateService.TranslateService.use(lang).subscribe(_ => {
      localStorage.setItem('status-loaded-language', 'success');
    }, _ => {
      localStorage.setItem('status-loaded-language', ' error');

      this._http.get(`assets/i18n/${lang}.json`).map(res => res.json()).subscribe(result => {
        localStorage.setItem('status-reloaded-language', 'success');
        this._toastTranslateService.TranslateService.setTranslation(lang, result);
      });
    });
  }

  ngOnInit() {

  }
}
