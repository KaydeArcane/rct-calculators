import { ShopItem } from '@models/shop-item.model';

export class ShopItemPrice extends ShopItem {
  private price: number = 0;
  private profit: number = 0;

  constructor(obj?) {
    super(obj);

    if (obj) {
      if (!isNaN(obj['price'])) {
        this.price = obj['price'];
      }
      if (!isNaN(obj['profit'])) {
        this.profit = obj['profit'];
      }
    }
  }

  getPrice = (): number => this.price;
  getProfit = (): number => this.profit;

  calculatePrice = (weather: object) => {
    // Determine shop item price based on weather
    let price = 0;

    // Check the selected weather conditions and apply the lower of the two corresponding values
    if (weather['temperate']) {
      price = this.getBaseValue();
    }
    if (weather['hot']) {
      if (price === 0) {
        price = this.getHotValue();
      } else {
        price = Math.min(price, this.getHotValue());
      }
    }
    if (weather['cold']) {
      if (price === 0) {
        price = this.getColdValue();
      } else {
        price = Math.min(price, this.getColdValue());
      }
    }

    // Apply price and profit values
    this.price = price;
    this.profit = this.price - this.getCost();
  }
}