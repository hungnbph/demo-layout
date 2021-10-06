import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Content2Component } from './content2/content2.component';
import { AppCustomPreload } from '../app.routing.loader';


export const routes: Routes = [


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreload, useHash: false })],
  exports: [RouterModule],
  providers: [AppCustomPreload]
})
export class  LayoutroutingModule{
}
