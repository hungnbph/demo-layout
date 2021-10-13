
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { ContentModule } from './content/content.module';
import { LayoutroutingModule } from './layout.routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarLeftComponent,
    SidebarRightComponent,

  ],
  imports: [
    BrowserModule,
    LayoutroutingModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
