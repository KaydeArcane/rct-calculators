import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GuestCapComponent } from './tools/guest-cap/guest-cap.component';
import { RidePricesComponent } from './tools/ride-prices/ride-prices.component';
import { RideDropdownComponent } from './common/ride-dropdown/ride-dropdown.component';
import { HeaderComponent } from './common/header/header.component';
import { RideItemComponent } from './tools/ride-prices/ride-item/ride-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestCapComponent,
    RidePricesComponent,
    AboutComponent,
    RideDropdownComponent,
    HeaderComponent,
    RideItemComponent
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
