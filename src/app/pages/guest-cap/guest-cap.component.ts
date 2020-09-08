import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from '@services/local-storage.service';
import { CommonUtils } from '@common/common.utils';
import { Attraction } from '@models/attraction.model';
import { GuestCap } from '@models/guest-cap.model';

@Component({
  selector: 'app-guest-cap',
  templateUrl: './guest-cap.component.html',
  styleUrls: ['./guest-cap.component.scss']
})
export class GuestCapComponent implements OnInit, OnDestroy {

  public placedItems: GuestCap[] = [];

  public harderGenForm = new FormControl(this.localStorage.get('guestCapHGG'));
  private harderGenFormSubscription;

  public softGuestCap: number = 0;

  constructor(private localStorage: LocalStorageService) {
    // Initialize local storage
    if (!this.localStorage.get('guestCapList')) this.localStorage.set('guestCapList', this.placedItems);
    if (this.localStorage.get('guestCapHGG') === null) this.localStorage.set('guestCapHGG', false);
  }

  ngOnInit(): void {
    // Fetch last created list from local storage
    const lsItems = this.localStorage.get('guestCapList');
    // Make GuestCap objects for each item fetched from local storage
    lsItems.forEach(item => {
      this.placedItems.push(new GuestCap(item));
    });

    // Calculate initial soft guest cap (SGC)
    this.calculateSoftGuestCap();

    // Update harder guest generation (HGG) toggle
    this.harderGenFormSubscription = this.harderGenForm.valueChanges.subscribe(value => {
      // Make all items affected by HGG toggle flash to signal that they've changed
      this.placedItems.forEach((item, idx) => {
        if (item.passesHarderGen) {
          this.placedItems[idx] = new GuestCap(item);
        }
      })
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

  // Push new item from items dropdown into placedItems list & recalculate SGC
  addItem = (item: Attraction) => {
    // Check if an item is already in the list
    const idx = CommonUtils.checkForDupes(this.placedItems, item);

    // If there is no duplicate or item is a tracked ride, add to list
    if (idx === null || item.getTracked()) {
      item.setDefaultNickname(this.placedItems);
      this.placedItems.unshift(new GuestCap(item));
      CommonUtils.scrollAddRideToTop();
    // Otherwise, if there is duplicate, increase quantity
    } else if (idx !== null) {
      this.placedItems[idx].quantity += 1;
      this.placedItems[idx] = new GuestCap(this.placedItems[idx]);
      CommonUtils.scrollElemIntoView('item' + this.placedItems[idx].getUniqueId());
    }

    this.calculateSoftGuestCap();
  }

  // Update item, recalculate guest cap, & save list to local storage
  updateItem = (item, idx) => {
    this.placedItems[idx].nickname = item.nickname;
    this.placedItems[idx].passesHarderGen = item.passesHarderGen;
    this.placedItems[idx].quantity = item.quantity;

    this.calculateSoftGuestCap();
    this.localStorage.set('guestCapList', this.placedItems);
  }

  // Remove a item from the placedItems list & recalculate SGC
  removeItem = (idx) => {
    this.placedItems.splice(idx, 1);

    this.calculateSoftGuestCap();
  }

  // Calculates the Soft Guest Cap value
  calculateSoftGuestCap = () => {
    let cap = 0;
    // Sums up all individual item contributions to the soft guest cap
    this.placedItems.forEach(item => {
      cap = cap + (item.getGuestCap() * item.quantity);
    });
    // If HGG is enabled, do additional calculations
    if (this.harderGenForm.value) {
      // Lower value of cap to maximum of 1000
      cap = Math.min(1000, cap);
      // Add additional contributions from items that pass HGG requirements
      this.placedItems.forEach(item => {
        if (item.passesHarderGen) {
          cap = cap + (item.getGuestCap() * 2);
        }
      });
    }
    // Sets soft guest cap and stores list of placedItems in local storage
    if (this.softGuestCap !== cap) {
      CommonUtils.flashItem(document.getElementById('soft-guest-cap-card'));
    }
    this.softGuestCap = cap;
    this.localStorage.set('guestCapList', this.placedItems);
  }

  clear = () => {
    this.placedItems.splice(0, this.placedItems.length);
    this.calculateSoftGuestCap();
  }
}
