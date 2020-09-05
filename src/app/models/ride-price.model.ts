import { CommonUtils } from '@common/common.utils';
import { Ride } from '@models/ride.model';
import { AgeValue } from '@models/age-value.model';
import { ageValues } from '@assets/ageValues';
export class RidePrice extends Ride {
  private uniqueId: string = CommonUtils.ID();
  public nickname: string;
  public e: number;
  public i: number;
  public n: number;
  public isDuplicate: boolean = false;
  private age: AgeValue = new AgeValue(ageValues[0]);
  private rideValue: number = 0;
  private price: number = 0;

  constructor(obj?) {
    super(obj);

    if (obj) {
      if (obj['nickname']) {
        this.nickname = obj['nickname'];
      }
      if (!isNaN(obj['e'])) {
        this.e = obj['e'];
      }
      if (!isNaN(obj['i'])) {
        this.i = obj['i'];
      }
      if (!isNaN(obj['n'])) {
        this.n = obj['n'];
      }
      this.isDuplicate = obj['isDuplicate'];
      if (obj['age']) {
        this.age = obj['age'];
      }
      if (!isNaN(obj['rideValue'])) {
        this.rideValue = obj['rideValue'];
      }
      if (!isNaN(obj['price'])) {
        this.price = obj['price'];
      }
    }

    this.age = new AgeValue(this.age);
  }

  getUniqueId = (): string => this.uniqueId
  getAgeValue = (): AgeValue => this.age;
  getRideValue = (): number => this.rideValue;
  getPrice = (): number => this.price;

  setAgeValue = (age) => this.age = new AgeValue(age);

  calculateRidePrice = (isOpenRCT2: boolean, isPaidEntry: boolean) => {
    // Calculate ride value based on ride stats and ride type rating bonuses
    if (this.e !== undefined && this.e !== null && this.i !== undefined && this.i !== null && this.n !== undefined && this.n !== null) {
      this.rideValue = 
        Math.floor(
          ((this.e * 100 * this.getRatings().getE())
          + (this.i * 100 * this.getRatings().getI())
          + (this.n * 100 * this.getRatings().getN()))
          / 1024
        );
  
      let calc = this.rideValue;
      // If not playing on OpenRCT2 and age bonus is addition value, add age bonus
      if (!isOpenRCT2 && this.age.getClassicBonus() !== 0) {
        calc = calc + this.age.getClassicBonus();
      // Else, multiply by age bonus
      } else {
        calc = calc * this.age.getMultiplier();
      }
      // If ride is duplicate, multiply by 0.75 and round down
      calc = Math.floor(calc * (this.isDuplicate ? 0.75 : 1));
      // If park charges for entry, divide by 4 and round down
      calc = Math.floor(calc / (isPaidEntry ? 4 : 1));
      // Divide by 5 to get max price at which guest will complain about ride price being too high
      calc = calc / 5;
      // Subtract 0.1 to get max price guests will pay, fixing to 2 decimal places and setting minimum at 0
      this.price = Math.max(Number.parseFloat((calc - 0.1).toFixed(2)), 0);
    } else {
      this.rideValue = 0;
      this.price = 0;
    }
  }
}