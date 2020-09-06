import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@common/header/header.component';
import { ParkListHeaderComponent } from '@common/park-list-header/park-list-header.component';
import { RideDropdownComponent } from '@common/ride-dropdown/ride-dropdown.component';
import { ShopItemDropdownComponent } from '@common/shop-item-dropdown/shop-item-dropdown.component';
import { DeleteFooterComponent } from '@common/delete-footer/delete-footer.component';
import { AboutComponent } from '@pages/about/about.component';
import { GuestCapComponent } from '@pages/guest-cap/guest-cap.component';
import { GuestCapItemComponent } from '@pages/guest-cap/guest-cap-item/guest-cap-item.component';
import { RidePricesComponent } from '@pages/ride-prices/ride-prices.component';
import { RideItemComponent } from '@pages/ride-prices/ride-item/ride-item.component';
import { ShopPricesComponent } from '@pages/shop-prices/shop-prices.component';
import { ShopItemComponent } from '@pages/shop-prices/shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParkListHeaderComponent,
    RideDropdownComponent,
    AboutComponent,
    GuestCapComponent,
    GuestCapItemComponent,
    RidePricesComponent,
    RideItemComponent,
    ShopPricesComponent,
    ShopItemDropdownComponent,
    ShopItemComponent,
    DeleteFooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
