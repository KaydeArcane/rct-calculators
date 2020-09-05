import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { GuestCapComponent } from './pages/guest-cap/guest-cap.component';
import { RidePricesComponent } from './pages/ride-prices/ride-prices.component';
import { RideDropdownComponent } from './common/ride-dropdown/ride-dropdown.component';
import { HeaderComponent } from './common/header/header.component';
import { RideItemComponent } from './pages/ride-prices/ride-item/ride-item.component';
import { ParkListHeaderComponent } from './common/park-list-header/park-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestCapComponent,
    RidePricesComponent,
    AboutComponent,
    RideDropdownComponent,
    HeaderComponent,
    RideItemComponent,
    ParkListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
