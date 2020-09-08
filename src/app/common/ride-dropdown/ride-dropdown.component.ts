import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Ride } from '@models/ride.model';
import { ridesListObj } from '@assets/ridesList';
import { shopsListObj } from '@assets/shopList';
import { CommonUtils } from '@common/common.utils';

@Component({
  selector: 'app-ride-dropdown',
  templateUrl: './ride-dropdown.component.html',
  styleUrls: ['./ride-dropdown.component.scss']
})
export class RideDropdownComponent implements OnInit, OnDestroy {
  @Input() types = undefined;
  @Output() rideSelected = new EventEmitter<Ride>();

  public rides = {
    transport: {
      name: "Transport Rides",
      list: ridesListObj.transport,
    },
    gentle: {
      name: "Gentle Rides",
      list: ridesListObj.gentle,
    },
    coaster: {
      name: "Roller Coasters",
      list: ridesListObj.coasters,
    },
    thrill: {
      name: "Thrill Rides",
      list: ridesListObj.thrill,
    },
    water: {
      name: "Water Rides",
      list: ridesListObj.water,
    },
    food: {
      name: "Food Shops",
      list: shopsListObj.food,
    },
    drinks: {
      name: "Drink Shops",
      list: shopsListObj.drinks,
    },
    merch: {
      name: "Merch Shops",
      list: shopsListObj.merch,
    },
    misc: {
      name: "Misc Stalls",
      list: shopsListObj.misc
    },
  };
  public ridesDropdown = this.fb.group({
    ride: ['']
  });

  private dropdownSubscription;
  
  constructor(
    private fb: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    // Initialize lists of rides and shops
    Object.keys(this.rides).forEach(idx => {
      // For each individual list, iterate through and convert them to Ride classes within a temp list if they match the selected type
      const tempList = [];
      this.rides[idx].list.forEach(item => {
        if (!this.types || (this.types && item['type'] === this.types)) {
          tempList.push(new Ride(item));
        }
      });
      // If temp list has entries, save it back to original list; otherwise clear original list
      if (tempList.length > 0) {
        Object.assign(this.rides[idx].list, tempList);
      } else {
        this.rides[idx].list = [];
      }
      // Sort the individual lists by name
      if (this.rides[idx].list.length > 1) {
        this.rides[idx].list.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);
      }
    })

    this.dropdownSubscription = this.ridesDropdown.controls['ride'].valueChanges.subscribe(value => {
      // Emit ride/shop when dropdown item is selected
      this.rideSelected.emit(value);
      this.ridesDropdown.reset({ride: ''}, {emitEvent: false});
    })
  }

  ngOnDestroy(): void {
    if (this.dropdownSubscription) {
      this.dropdownSubscription.unsubscribe();
    }
  }

  capitalize = (str) => {
    return CommonUtils.capitalize(str);
  }

  // Preserves original property order when displaying ride and shop list
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
