import { CommonUtils } from '@common/common.utils';
import { Ride } from '@models/ride.model';
import { AgeValue } from '@models/age-value.model';
import { ageValues } from '@assets/ageValues';
export class RidePrice extends Ride {
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

  getAgeValue = (): AgeValue => this.age;
  getRideValue = (): number => this.rideValue;
  getPrice = (): number => this.price;

  setAgeValue = (age) => this.age = new AgeValue(age);

  calculateRidePrice = (isOpenRCT2: boolean, isPaidEntry: boolean) => {
    // Calculate ride value based on ride stats and ride type rating bonuses
    if (this.e !== undefined && this.e !== null && this.i !== undefined && this.i !== null && this.n !== undefined && this.n !== null) {
      const eVal = Math.floor(this.e * 100 * this.getRatings().getE() / 1024);
      const iVal = Math.floor(this.i * 100 * this.getRatings().getI() / 1024);
      const nVal = Math.floor(this.n * 100 * this.getRatings().getN() / 1024);
      this.rideValue = eVal + iVal + nVal;
  
      let calc = this.rideValue;
      // If not playing on OpenRCT2 and age bonus is addition value, add age bonus
      if (!isOpenRCT2 && this.age.getClassicBonus() !== 0) {
        calc = calc + this.age.getClassicBonus();
      // Else, multiply by age bonus
      } else {
        calc = Math.floor(calc * this.age.getMultiplier());
      }
      // If ride is duplicate, multiply by 0.75 and round down
      calc = Math.floor(calc * (this.isDuplicate ? 0.75 : 1));
      // If park charges for entry, divide by 4 and round down
      calc = Math.floor(calc / (isPaidEntry ? 4 : 1));
      // Divide by 5 to get max price a guest will pay for the ride
      this.price = calc / 5;
    } else {
      this.rideValue = 0;
      this.price = 0;
    }
  }
}