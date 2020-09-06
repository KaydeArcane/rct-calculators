export class ShopItem {
  private id: string;
  private name: string;
  private buyInRain: boolean;
  private cost: number = 0;
  private baseValue: number = 0;
  private hotValue: number = 0;
  private coldValue: number = 0;

  constructor(obj?) {
    if (obj) {
      this.id = obj['id'];
      this.name = obj['name'];
      this.buyInRain = obj['buyInRain'];
      this.cost = obj['cost'];
      this.baseValue = obj['baseValue'];
      this.hotValue = obj['hotValue'];
      this.coldValue = obj['coldValue'];
    }
  }

  getId = (): string => this.id;
  getName = (): string => this.name;
  getBuyInRain = (): boolean => this.buyInRain;
  getCost = (): number => this.cost;
  getBaseValue = (): number => this.baseValue;
  getHotValue = (): number => this.hotValue;
  getColdValue = (): number => this.coldValue;
}