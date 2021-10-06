
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { ContentComponent } from './content/content.component';
import { LayoutroutingModule } from './layout.routing.module';
import { Content2Component } from './content2/content2.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    ContentComponent,
    Content2Component,

  ],
  imports: [
    BrowserModule,
    LayoutroutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
