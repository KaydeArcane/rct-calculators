import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { GuestCapComponent } from '@pages/guest-cap/guest-cap.component';
import { RidePricesComponent } from '@pages/ride-prices/ride-prices.component';

export const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'guest-cap', component: GuestCapComponent
  },
  {
    path: 'prices/rides', component: RidePricesComponent
  },
  {
    path: 'prices', redirectTo: 'prices/rides', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'about', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
