import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from '@services/local-storage.service';
import { CommonUtils } from '@common/common.utils';
import { Attraction } from '@models/attraction.model';
import { ShopItemPrice } from '@models/shop-item-price.model';

@Component({
  selector: 'app-shop-prices',
  templateUrl: './shop-prices.component.html',
  styleUrls: ['./shop-prices.component.scss']
})
export class ShopPricesComponent implements OnInit, OnDestroy {

  public soldItems: ShopItemPrice[] = [];

  public weather = {
    temperate: true,
    hot: false,
    cold: false
  };
  public weatherForm = this.fb.group({
    'temperate': [false],
    'hot': [false],
    'cold': [false]
  });;
  private weatherFormSubscription;

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService
  ) {
    // Initialize local storage
    if (!this.localStorage.get('shopPricesList')) this.localStorage.set('shopPricesList', this.soldItems);
    if (this.localStorage.get('shopPricesWeather') === null) this.localStorage.set('shopPricesWeather', this.weather);
  }

  ngOnInit(): void {
    // Fetch previous game settings from local storage
    const weather = this.localStorage.get('shopPricesWeather');
    this.weatherForm.get('temperate').setValue(weather['temperate']);
    this.weatherForm.get('hot').setValue(weather['hot']);
    this.weatherForm.get('cold').setValue(weather['cold']);
    // Fetch last created list from local storage
    const lsItems = this.localStorage.get('shopPricesList');
    lsItems.forEach(item => {
      this.soldItems.push(new ShopItemPrice(item));
    });

    // Update weather values, save to local storage, & recalculate shop item prices
    this.weatherFormSubscription = this.weatherForm.valueChanges.subscribe(value => {
      this.weather.temperate = value['temperate'];
      this.weather.hot = value['hot'];
      this.weather.cold = value['cold'];
      // Store current value of weather settings in local storage
      this.localStorage.set('shopPricesWeather', this.weather);
      this.calculateAllShopItemPrices();
    })
  }

  // Unsubscribe from form value changes when leaving page
  ngOnDestroy(): void {
    if (this.weatherFormSubscription) {
      this.weatherFormSubscription.unsubscribe();
    }
  }

  // Push new shop item from shop items dropdown into soldItems list & update duplicates
  addShopItem = (item: Attraction) => {
    // Iterate thru items in each shop
    item.getItems().forEach(shopItem => {
      // Check if item is already in current list
      const found = CommonUtils.checkForDupes(this.soldItems, shopItem);
  
      if (found === null) {
        // If not, add item to list and calculate prices
        this.soldItems.unshift(new ShopItemPrice(shopItem));
    
        this.calculateAllShopItemPrices();
      } else {
        // Otherwise, reinstate existing item to make it play flash animation
        this.soldItems[found] = new ShopItemPrice(this.soldItems[found]);
      }
    })
  }

  // Remove shop item from list
  removeShopItem = (idx) => {
    this.soldItems.splice(idx, 1);
    this.localStorage.set('shopPricesList', this.soldItems);
  }

  // Recalculate all shop item prices & saves shop items to local storage
  calculateAllShopItemPrices = () => {
    this.soldItems.forEach((item, idx) => {
      const itemPrice = item.getPrice();
      item.calculatePrice(this.weather);
      if (itemPrice !== item.getPrice()) {
        // If item price changed, reinstate item to make it play flash animation
        this.soldItems[idx] = new ShopItemPrice(item);
      }
    });
    this.localStorage.set('shopPricesList', this.soldItems);
  }

  // Clear all shop items and reset settings to default values
  clear = () => {
    this.soldItems.splice(0, this.soldItems.length);
    this.calculateAllShopItemPrices();
  }
}
