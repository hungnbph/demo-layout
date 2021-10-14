import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { CdpModule } from './cdp/cdp.module';
import { MarketingModule } from './marketing/marketing.module';



@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CdpModule,
    MarketingModule,
  ],
  providers: [],
  bootstrap: [ContentComponent]
})
export class ContentModule { }
