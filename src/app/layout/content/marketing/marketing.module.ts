import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingodule } from './marketing.routing.module';
import { ChienDichFbAdsComponent } from './ads-automation/chien-dich-fb-ads/chien-dich-fb-ads.component';
import { ConnectAcountAdsComponent } from './ads-automation/connect-acount-ads/connect-acount-ads.component';
import { FbAdsComponent } from './ads-automation/fb-ads/fb-ads.component';
import { ObjectAdsComponent } from './ads-automation/object-ads/object-ads.component';
import { QuyTacAdsComponent } from './ads-automation/quy-tac-ads/quy-tac-ads.component';
import { JouneyBuilderComponent } from './jouney-builder/jouney-builder/jouney-builder.component';
import { JouneyCampaignMasterComponent } from './jouney-builder/jouney-campaign-master/jouney-campaign-master.component';
import { MauEmailComponent } from './jouney-builder/mau-email/mau-email.component';
import { CreatUrlLandingPageComponent } from './landing-page/creat-url-landing-page/creat-url-landing-page.component';
import { IntegrationComponent } from './landing-page/integration/integration.component';
import { CampaignMarketingComponent } from './marketing-automation/campaign-marketing/campaign-marketing.component';
import { IndividualMarketingComponent } from './marketing-automation/individual-marketing/individual-marketing.component';
import { MarterCampaignComponent } from './marketing-automation/marter-campaign/marter-campaign.component';
import { TempalateSmsComponent } from './sms-brandame/tempalate-sms/tempalate-sms.component';
;




@NgModule({
  declarations: [
    MarketingComponent,
    CampaignMarketingComponent,
    MarterCampaignComponent,
    IndividualMarketingComponent,
    JouneyBuilderComponent,
    JouneyCampaignMasterComponent,
    MauEmailComponent,
    CreatUrlLandingPageComponent,
    IntegrationComponent,
    TempalateSmsComponent,
    FbAdsComponent,
    QuyTacAdsComponent,
    ObjectAdsComponent,
    ChienDichFbAdsComponent,
    ConnectAcountAdsComponent,
  ],
  imports: [
    BrowserModule,
    MarketingRoutingodule,
  ],
  providers: [],
  bootstrap: [MarketingComponent]
})
export class MarketingModule { }
