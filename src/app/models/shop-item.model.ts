export class ShopItem {
  private id: string;
  private name: string;
  private buyInRain: boolean;
  private cost: number = 0;
  private baseValue: number = 0;
  private hotValue: number = 0;
  private coldValue: number = 0;
  private price: number = 0;
  private profit: number = 0;

  constructor(obj?) {
    if (obj) {
      this.id = obj['id'];
      this.name = obj['name'];
      this.buyInRain = obj['buyInRain'];
      this.cost = obj['cost'];
      this.baseValue = obj['baseValue'];
      this.hotValue = obj['hotValue'];
      this.coldValue = obj['coldValue'];
      if (!isNaN(obj['price'])) {
        this.price = obj['price'];
      }
      if (!isNaN(obj['profit'])) {
        this.profit = obj['profit'];
      }
    }
  }

  getId = (): string => this.id;
  getName = (): string => this.name;
  getBuyInRain = (): boolean => this.buyInRain;
  getCost = (): number => this.cost;
  getBaseValue = (): number => this.baseValue;
  getHotValue = (): number => this.hotValue;
  getColdValue = (): number => this.coldValue;
  getPrice = (): number => this.price;
  getProfit = (): number => this.profit;

  calculatePrice = (weather: object) => {
    // Determine shop item price based on weather
    let price = 0;
    if (weather['temperate']) {
      price = this.baseValue;
    }
    if (weather['hot']) {
      if (price === 0) {
        price = this.hotValue;
      } else {
        price = Math.min(price, this.hotValue);
      }
    }
    if (weather['cold']) {
      if (price === 0) {
        price = this.coldValue;
      } else {
        price = Math.min(price, this.coldValue);
      }
    }

    // Apply price and profit values
    this.price = price;
    this.profit = this.price - this.cost;
  }
}