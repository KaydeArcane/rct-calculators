import { CommonUtils } from './../../common/common.utils';
import { RidePrice } from './../../models/ride-price.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from './../../services/local-storage.service';
import { Ride } from './../../models/ride.model';
import { ridesList } from '@assets/ridesList';

@Component({
  selector: 'app-ride-prices',
  templateUrl: './ride-prices.component.html',
  styleUrls: ['./ride-prices.component.css']
})
export class RidePricesComponent implements OnInit {

  private rides: object = {};
  public placedRides: RidePrice[] = [];

  public isOpenRCT2: boolean = true;
  public isPaidEntry: boolean = false;
  public paidEntryForm = new FormControl(false);
  private paidEntryFormSubscription;

  public confirm: boolean = false;

  constructor(private localStorage: LocalStorageService) {
    // Initialize local storage
    if (!this.localStorage.get('ridePricesList')) this.localStorage.set('ridePricesList', this.placedRides);
    if (this.localStorage.get('ridePricesGame') === null) this.localStorage.set('ridePricesGame', this.isOpenRCT2);
    if (this.localStorage.get('ridePricesEntry') === null) this.localStorage.set('ridePricesEntry', this.isPaidEntry);
  }

  ngOnInit(): void {
    // Create mapped object of rides
    ridesList.forEach(cap => {
      this.rides[cap.id] = new Ride(cap);
    });

    // Fetch previous game settings from local storage
    this.isOpenRCT2 = this.localStorage.get('ridePricesGame');
    this.paidEntryForm.setValue(this.localStorage.get('ridePricesEntry'));
    // Fetch last created list from local storage
    const lsRides = this.localStorage.get('ridePricesList');
    lsRides.forEach(ride => {
      this.placedRides.push(new RidePrice(ride));
    });

    // Update paid entry toggle, save to local storage, & recalculate ride prices
    this.paidEntryFormSubscription = this.paidEntryForm.valueChanges.subscribe(value => {
      // Store current value of HGG toggle in local storage
      this.isPaidEntry = value;
      this.localStorage.set('ridePricesEntry', value);
      this.calculateAllRidePrices();
    })
  }

  ngOnDestroy(): void {
    if (this.paidEntryFormSubscription) {
      this.paidEntryFormSubscription.unsubscribe();
    }
  }

  // Set game type, store to local storage, & recalculate ride prices
  setGame = (state) => {
    this.isOpenRCT2 = state;
    this.localStorage.set('ridePricesGame', this.isOpenRCT2);
    this.calculateAllRidePrices();
  }

  // Push new ride from rides dropdown into placedRides list & update duplicates
  addRide = (ride: Ride) => {
    this.placedRides.unshift(new RidePrice(this.rides[ride.getId()]));

    this.updateDuplicates(ride);

    CommonUtils.scrollElemToTop('ride' + this.placedRides[0].getUniqueId());
  }

  // Remove ride from list & update duplicates
  removeRide = (idx) => {
    const ride = this.placedRides[idx];
    this.placedRides.splice(idx, 1);
    this.updateDuplicates(ride);
  }

  // Update ride stats, recalculate individual ride price, & save ride to local storage
  updateRide = (ride, idx) => {
    this.placedRides[idx].e = ride.e;
    this.placedRides[idx].i = ride.i;
    this.placedRides[idx].n = ride.n;

    this.placedRides[idx].calculateRidePrice(this.isOpenRCT2, this.isPaidEntry);
    this.localStorage.set('ridePricesList', this.placedRides);
  }

  // Check ride list to find if the specified ride has any duplicates in the list and update list accordingly, then save rides to local storage
  updateDuplicates = (ride) => {
    let count = 0;
    let dupes = false;

    // Iterate thru rides looking for duplicates
    this.placedRides.every((pr) => {
      if (pr.getId() === ride.getId()) {
        count += 1;
      }
      // If ride count is 2 or greater, escape loop
      if (count > 1) {
        return false;
      } else {
        return true;
      }
    });

    // If ride count is 2 or greater, indicate that duplicates were found
    if (count > 1) {
      dupes = true;
    }

    // Iterate thru rides and set isDuplicate values according to if duplicates were found
    this.placedRides.forEach(pr => {
      if (pr.getId() === ride.getId()) {
        pr.isDuplicate = dupes;
      }
      // Recalculate individual ride price
      pr.calculateRidePrice(this.isOpenRCT2, this.isPaidEntry);
    })

    // Update rides list in local storage
    this.localStorage.set('ridePricesList', this.placedRides);
  }

  // Recalculate all ride prices & saves rides to local storage
  calculateAllRidePrices = () => {
    this.placedRides.forEach(ride => {
      ride.calculateRidePrice(this.isOpenRCT2, this.isPaidEntry);
    });
    this.localStorage.set('ridePricesList', this.placedRides);
  }

  // Toggles confirmation message for clearing park
  showConfirm = (state: boolean) => {
    this.confirm = state;
  }

  // Clear all rides and reset settings to default values
  clear = () => {
    this.placedRides.splice(0, this.placedRides.length);
    this.setGame(true);
    this.paidEntryForm.setValue(false);
  }
}
