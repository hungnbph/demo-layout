import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './cdp/profile/profile.component';
import { UnityProfileComponent } from './cdp/unity-profile/unity-profile.component';
import { CheckEmailComponent } from './cdp/check-email/check-email.component';
import { ProfileAdminComponent } from './cdp/profile-admin/profile-admin.component';
import { ProfileCustomizationComponent } from './cdp/profile-customization/profile-customization.component';
import { EventCustomizationComponent } from './cdp/event-customization/event-customization.component';

@NgModule({
  declarations: [
    ContentComponent,
    HomeComponent,
    ProfileComponent,
    UnityProfileComponent,
    CheckEmailComponent,
    ProfileAdminComponent,
    ProfileCustomizationComponent,
    EventCustomizationComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ContentComponent]
})
export class ContentModule { }
