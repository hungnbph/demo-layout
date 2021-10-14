import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdpComponent } from './cdp.component';
import { CdpRoutingodule } from './cdp.routing.module';
import { CheckEmailComponent } from './check-email/check-email.component';
import { EventCustomizationComponent } from './event-customization/event-customization.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileCustomizationComponent } from './profile-customization/profile-customization.component';
import { ProfileComponent } from './profile/profile.component';
import { UnityProfileComponent } from './unity-profile/unity-profile.component';




@NgModule({
  declarations: [
    ProfileComponent,
    UnityProfileComponent,
    CheckEmailComponent,
    ProfileAdminComponent,
    ProfileCustomizationComponent,
    EventCustomizationComponent,
    CdpComponent,
  ],
  imports: [
    BrowserModule,
    CdpRoutingodule,
  ],
  providers: [],
  bootstrap: [CdpComponent]
})
export class CdpModule { }
