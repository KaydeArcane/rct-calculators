import { CommonUtils } from './../../common/common.utils';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ride } from '@models/ride.model';
import { GuestCap } from '@models/guest-cap.model';
import { ridesList } from '@assets/ridesList';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-guest-cap',
  templateUrl: './guest-cap.component.html',
  styleUrls: ['./guest-cap.component.css']
})
export class GuestCapComponent implements OnInit, OnDestroy {

  private rides: object = {};
  public placedRides: GuestCap[] = [];

  public harderGenForm = new FormControl(this.localStorage.get('guestCapHGG'));
  private harderGenFormSubscription;

  public softGuestCap: number = 0;

  constructor(private localStorage: LocalStorageService) {
    // Initialize local storage
    if (!this.localStorage.get('guestCapList')) this.localStorage.set('guestCapList', this.placedRides);
    if (this.localStorage.get('guestCapHGG') === null) this.localStorage.set('guestCapHGG', false);
  }

  ngOnInit(): void {
    // Create mapped object of rides
    ridesList.forEach(cap => {
      this.rides[cap.id] = new Ride(cap);
    });

    // Fetch last created list from local storage
    const lsRides = this.localStorage.get('guestCapList');
    // Make GuestCap objects for each ride fetched from local storage
    lsRides.forEach(ride => {
      this.placedRides.push(new GuestCap(ride));
    });

    // Calculate initial soft guest cap (SGC)
    this.calculateSoftGuestCap();

    // Update harder guest generation (HGG) toggle
    this.harderGenFormSubscription = this.harderGenForm.valueChanges.subscribe(value => {
      if (!value) {
        // Clear passesHarderGen value for rides if HGG is toggling off
        this.placedRides.forEach(ride => {
          ride.passesHarderGen = false;
        })
      }
      // Recalculate SGC
      this.calculateSoftGuestCap();
      // Store current value of HGG toggle in local storage
      this.localStorage.set('guestCapHGG', value);
    })
  }

  // Unsubscribe from form value changes when leaving page
  ngOnDestroy(): void {
    if (this.harderGenFormSubscription) {
      this.harderGenFormSubscription.unsubscribe();
    }
  }

  toggleSection = (target) => {
    CommonUtils.toggleSection(target);
  }

  // Push new ride from rides dropdown into placedRides list & recalculate SGC
  addRide = (ride: Ride) => {
    this.placedRides.push(new GuestCap(this.rides[ride.getId()]));
    this.placedRides.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1)

    this.calculateSoftGuestCap();
  }

  // Set an individual ride's passesHarderGen value based on table checkbox & recalculate SGC
  toggleRideHGG = (ride: GuestCap, idx) => {
    ride.passesHarderGen = (<HTMLInputElement>document.getElementById('ride-' + idx)).checked;

    this.calculateSoftGuestCap();
  }

  // Remove a ride from the placedRides list & recalculate SGC
  clearRide = (idx) => {
    this.placedRides.splice(idx, 1);

    this.calculateSoftGuestCap();
  }

  // Returns an individual ride's SGC contribution
  rideGuestCap = (ride: GuestCap) => {
    return ride.getGuestCap() * (ride.passesHarderGen ? 3 : 1)
  }

  // Calculates the Soft Guest Cap value
  calculateSoftGuestCap = () => {
    let cap = 0;
    // Sums up all individual ride contributions to the soft guest cap
    this.placedRides.forEach(ride => {
      cap = cap + ride.getGuestCap();
    });
    // If HGG is enabled, do additional calculations
    if (this.harderGenForm.value) {
      // Lower value of cap to maximum of 1000
      cap = Math.min(1000, cap);
      // Add additional contributions from rides that pass HGG requirements
      this.placedRides.forEach(ride => {
        if (ride.passesHarderGen) {
          cap = cap + (ride.getGuestCap() * 2);
        }
      });
    }
    // Sets soft guest cap and stores list of placedRides in local storage
    this.softGuestCap = cap;
    this.localStorage.set('guestCapList', this.placedRides);
  }

  clear = () => {
    this.placedRides.splice(0, this.placedRides.length);
    this.harderGenForm.setValue(false);
  }
}
