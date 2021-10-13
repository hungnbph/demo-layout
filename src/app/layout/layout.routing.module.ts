import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreload } from '../app.routing.loader';


export const routes: Routes = [


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreload, useHash: false })],
  exports: [RouterModule],
  providers: [AppCustomPreload]
})
export class LayoutroutingModule {
}
