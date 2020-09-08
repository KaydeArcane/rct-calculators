import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Ride } from '@models/ride.model';
import { ridesListObj } from '@assets/ridesList';
import { shopsListObj } from '@assets/shopList';
import { CommonUtils } from '@common/common.utils';

@Component({
  selector: 'app-attraction-dropdown',
  templateUrl: './attraction-dropdown.component.html',
  styleUrls: ['./attraction-dropdown.component.scss']
})
export class AttractionDropdownComponent implements OnInit, OnDestroy {
  @Input() types = undefined;
  @Output() attractionSelected = new EventEmitter<Ride>();

  public attractions = {
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
  public attractionsDropdown = this.fb.group({
    attraction: ['']
  });

  private dropdownSubscription;
  
  constructor(
    private fb: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    // Initialize lists of attractions
    Object.keys(this.attractions).forEach(idx => {
      // For each individual list, iterate through and convert them to Ride classes within a temp list if they match the selected type
      const tempList = [];
      this.attractions[idx].list.forEach(item => {
        if (!this.types || (this.types && item['type'] === this.types)) {
          tempList.push(new Ride(item));
        }
      });
      // If temp list has entries, save it back to original list; otherwise clear original list
      if (tempList.length > 0) {
        Object.assign(this.attractions[idx].list, tempList);
      } else {
        this.attractions[idx].list = [];
      }
      // Sort the individual lists by name
      if (this.attractions[idx].list.length > 1) {
        this.attractions[idx].list.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);
      }
    })

    this.dropdownSubscription = this.attractionsDropdown.controls['attraction'].valueChanges.subscribe(value => {
      // Emit attraction when dropdown item is selected
      this.attractionSelected.emit(value);
      this.attractionsDropdown.reset({attraction: ''}, {emitEvent: false});
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

  // Preserves original property order when displaying attraction list
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
