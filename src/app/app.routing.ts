import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreload } from './app.routing.loader';
import { UserCanActive } from 'lib/src/app/service/common/authenticate.service';
import { LayoutComponent } from './layout/layout.component';
import { MoLibLoginComponent } from 'lib/src/app/components/login/login.component';
import { MoLibRegisterComponent } from 'lib/src/app/components/register/register.component';
import { ContentComponent } from './layout/content/content.component';
import { Content2Component } from './layout/content2/content2.component';

export const routes: Routes = [
  {
    path: 'login',
    component: MoLibLoginComponent
  },
  {
    path: 'register',
    component: MoLibRegisterComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'detail',
        component: Content2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreload, useHash: false })],
  exports: [RouterModule],
  providers: [AppCustomPreload]
})

export class AppRoutingModule {
}
