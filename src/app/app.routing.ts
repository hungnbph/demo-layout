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
import { CampaignMarketingComponent } from './layout/content/marketing/marketing-automation/campaign-marketing/campaign-marketing.component';
import { IndividualMarketingComponent } from './layout/content/marketing/marketing-automation/individual-marketing/individual-marketing.component';
import { MarterCampaignComponent } from './layout/content/marketing/marketing-automation/marter-campaign/marter-campaign.component';
import { JouneyBuilderComponent } from './layout/content/marketing/jouney-builder/jouney-builder/jouney-builder.component';
import { JouneyCampaignMasterComponent } from './layout/content/marketing/jouney-builder/jouney-campaign-master/jouney-campaign-master.component';
import { MauEmailComponent } from './layout/content/marketing/jouney-builder/mau-email/mau-email.component';
import { FbAdsComponent } from './layout/content/marketing/ads-automation/fb-ads/fb-ads.component';
import { ObjectAdsComponent } from './layout/content/marketing/ads-automation/object-ads/object-ads.component';
import { QuyTacAdsComponent } from './layout/content/marketing/ads-automation/quy-tac-ads/quy-tac-ads.component';
import { CdpComponent } from './layout/content/cdp/cdp.component';
import { MarketingComponent } from './layout/content/marketing/marketing.component';
import { ChienDichFbAdsComponent } from './layout/content/marketing/ads-automation/chien-dich-fb-ads/chien-dich-fb-ads.component';
import { ConnectAcountAdsComponent } from './layout/content/marketing/ads-automation/connect-acount-ads/connect-acount-ads.component';
import { TempalateSmsComponent } from './layout/content/marketing/sms-brandame/tempalate-sms/tempalate-sms.component';
import { CreatUrlLandingPageComponent } from './layout/content/marketing/landing-page/creat-url-landing-page/creat-url-landing-page.component';
import { IntegrationComponent } from './layout/content/marketing/landing-page/integration/integration.component';

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
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cdp',
        component: CdpComponent,
        children: [
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full',
          },

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
        path: 'marketing',
        component: MarketingComponent,
        children: [
          {
            path: '',
            redirectTo: 'campaign-marketing',
            pathMatch: 'full',
          },
          {
            path: 'campaign-marketing',
            component: CampaignMarketingComponent,
          },
          {
            path: 'individual-marketing',
            component: IndividualMarketingComponent,
          },
          {
            path: 'master-campaign',
            component: MarterCampaignComponent,
          },
          {
            path: 'jouney-builder',
            component: JouneyBuilderComponent,
          },
          {
            path: 'jouney-campaign-master',
            component: JouneyCampaignMasterComponent,
          },
          {
            path: 'mau-email',
            component: MauEmailComponent,
          },
          {
            path: 'fb-ads',
            component: FbAdsComponent,
          },
          {
            path: 'quytac-ads',
            component: QuyTacAdsComponent,
          },
          {
            path: 'object-ads',
            component: ObjectAdsComponent,
          },
          {
            path: 'chien-dich-fb-ads',
            component: ChienDichFbAdsComponent,
          },
          {
            path: 'connect-acount-ads',
            component: ConnectAcountAdsComponent,
          },
          {
            path: 'tempalate-sms',
            component: TempalateSmsComponent,
          },
          {
            path: 'creact-landing-page',
            component: CreatUrlLandingPageComponent,
          },
          {
            path: 'tich-hop',
            component: IntegrationComponent,
          }
        ]
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
