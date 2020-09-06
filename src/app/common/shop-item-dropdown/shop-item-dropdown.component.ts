import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShopItem } from '@models/shop-item.model';
import { shopItems } from '@assets/shopItemList';

@Component({
  selector: 'app-shop-item-dropdown',
  templateUrl: './shop-item-dropdown.component.html',
  styleUrls: ['./shop-item-dropdown.component.scss']
})
export class ShopItemDropdownComponent implements OnInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<ShopItem>();

  public items: ShopItem[] = [];
  public itemsDropdown = new FormControl();
  
  private dropdownSubscription;

  constructor() { }

  ngOnInit(): void {
    // Create List of Shop Items
    const tempItems = [];
    shopItems.forEach(item => {
      tempItems.push(new ShopItem(item));
    });
    // Store List
    Object.assign(this.items, tempItems);
    // Sort by Name
    this.items.sort((a, b) => (a.getName() > b.getName()) ? 1 : -1);

    this.dropdownSubscription = this.itemsDropdown.valueChanges.subscribe(value => {
      // Emit Selected Ride when Dropdown Changes
      this.itemSelected.emit(value);
      this.itemsDropdown.reset('', {emitEvent: false});
    })
  }
  
  ngOnDestroy(): void {
    if (this.dropdownSubscription) {
      this.dropdownSubscription.unsubscribe();
    }
  }
}
