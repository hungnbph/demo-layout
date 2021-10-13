import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreload } from './app.routing.loader';
import { UserCanActive } from 'lib/src/app/service/common/authenticate.service';
import { LayoutComponent } from './layout/layout.component';
import { MoLibLoginComponent } from 'lib/src/app/components/login/login.component';
import { MoLibRegisterComponent } from 'lib/src/app/components/register/register.component';
import { HomeComponent } from './layout/content/home/home.component';
import { ProfileComponent } from './layout/content/cdp/profile/profile.component';
import { UnityProfileComponent } from './layout/content/cdp/unity-profile/unity-profile.component';
import { CheckEmailComponent } from './layout/content/cdp/check-email/check-email.component';
import { ProfileAdminComponent } from './layout/content/cdp/profile-admin/profile-admin.component';
import { ProfileCustomizationComponent } from './layout/content/cdp/profile-customization/profile-customization.component';
import { EventCustomizationComponent } from './layout/content/cdp/event-customization/event-customization.component';

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
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cdp',
        component: ProfileComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
          },
          {
            path: 'untyprofile',
            component: UnityProfileComponent,
          },
          {
            path: 'check-email',
            component: CheckEmailComponent,
          },
          {
            path: 'profile-admin',
            component: ProfileAdminComponent,
          },
          {
            path: 'profile-customization',
            component: ProfileCustomizationComponent,
          },
          {
            path: 'event-customization',
            component: EventCustomizationComponent,
          },
        ],
      },
      {
        path: 'event-customization',
        component: EventCustomizationComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreload, useHash: false })],
  exports: [RouterModule],
  providers: [AppCustomPreload]
})

export class AppRoutingModule {
}
