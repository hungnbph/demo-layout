import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CacheService } from 'lib/src/app/service/common/cache.service';
import { LANGUAGE, CURRENT_LANG } from 'lib/src/app/common/define/language.define';
import { CacheKeys } from 'lib/src/app/common/define/cache-keys.define';
import { WEB_VERSION } from 'lib/src/app/common/define/version.define';
import { DefineConstants } from 'lib/src/app/common/define/constants.define';
import { DefineFunction } from 'lib/src/app/common/define/function.define';
import { MoLibCommonServiceModule } from 'lib/src/app/service/common/common-service.module';
import { MoLibLoginModule } from 'lib/src/app/components/login/login.module';
import { MoLibRegisterModule } from 'lib/src/app/components/register/register.module';


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MoLibCommonServiceModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      },
      isolate: false
    }),
    MoLibLoginModule,
    MoLibRegisterModule,
  ],

  declarations: [
    AppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _translate: TranslateService, private _router: Router, private _cacheService: CacheService) {
    this._translate.addLangs([LANGUAGE.VI, LANGUAGE.EN]);
    let lang = localStorage.getItem(LANGUAGE.KEY_LANGUAGE_STORAGE);
    if (!lang) {
      const urlParams = new URLSearchParams(window.location.search);
      lang = urlParams.get('lang') ? urlParams.get('lang') : LANGUAGE.DEFAULT;
    }
    localStorage.setItem(LANGUAGE.KEY_LANGUAGE_STORAGE, lang);
    this._translate.setDefaultLang(lang);
    setTimeout(() => {
      const currentVersionWeb = this._cacheService.get(CacheKeys.KEY_CACHE_WEB_VERSION);
      if (currentVersionWeb !== WEB_VERSION) {
        this._cacheService.clearAll();
        const path = window.location.pathname;
        if (path !== DefineConstants.ROOT_PATH_LOGIN) {
          DefineFunction.redirectToLogin(this._router);
        }
      }
    }, 2000);

    this._router.events.subscribe((event) => {
      console.log(event);
      // if (event instanceof NavigationEnd) {
      //   const path = window.location.pathname;
      //   if (path === '/account') {
      //     this._router.navigateByUrl(window.location.pathname);
      //   }
      // }
    });
  }
}
