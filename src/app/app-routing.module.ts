import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { GuestCapComponent } from '@pages/guest-cap/guest-cap.component';
import { RidePricesComponent } from '@pages/ride-prices/ride-prices.component';
import { ShopPricesComponent } from '@pages/shop-prices/shop-prices.component';

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
    path: 'prices/shops', component: ShopPricesComponent
  },
  {
    path: 'prices', redirectTo: 'prices/rides', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'about', pathMatch: 'full'
  }
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
