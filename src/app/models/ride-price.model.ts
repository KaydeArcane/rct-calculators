import { Attraction } from '@models/attraction.model';
import { AgeValue } from '@models/age-value.model';
import { ageValues } from '@assets/ageValues';

class DuplicateRide {
  private name: string;
  private nickname: string;
  private uniqueCase: boolean = false;

  constructor(obj?) {
    if (obj) {
      this.name = obj['name'];
      this.nickname = obj['nickname'];
      this.uniqueCase = obj['uniqueCase'];
    }
  }

  getName = (): string => this.name;
  getNickname = (): string => this.nickname;
  getUniqueCase = (): boolean => this.uniqueCase;

  setUniqueCase = (val): void => this.uniqueCase = val;
}

export class RidePrice extends Attraction {
  public e: number;
  public i: number;
  public n: number;
  public isDuplicate: boolean = false;
  public duplicatesList: DuplicateRide[] = [];
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
      if (obj['duplicatesList']) {
        this.duplicatesList = obj['duplicatesList'];
      }
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

    const tempList = [];
    this.duplicatesList.forEach(dupe => {
      tempList.push(new DuplicateRide(dupe));
    });
    Object.assign(this.duplicatesList, tempList);
  }

  getAgeValue = (): AgeValue => this.age;
  getRideValue = (): number => this.rideValue;
  getPrice = (): number => this.price;

  setAgeValue = (age) => this.age = new AgeValue(age);

  findDuplicates = (list: RidePrice[]) => {
    // Clear out current duplicates list
    this.duplicatesList.splice(0, this.duplicatesList.length);
    // Iterate thru ride list looking for any duplicate rides that are not this ride
    list.forEach(ride => {
      if (ride.getId() === this.getId() && ride.getUniqueId() !== this.getUniqueId()) {
        let rideToPush;
        if (ride.nickname) {
          // If ride has nickname, create duplicate ride object from it
          rideToPush = new DuplicateRide(ride);
        } else {
          // Otherwise, create duplicate ride with 'Unnamed Ride' as stand-in nickname
          rideToPush = new DuplicateRide({name: ride.getName(), nickname: 'Unnamed ' + ride.getName()});
        }

        // If the rides are duplicates, but not exact duplicates, mark as unique case (for showing tooltip)
        if (ride.getName() !== this.getName()) {
          rideToPush.setUniqueCase(true);
        }
        // Push duplicate ride to the duplicates list
        this.duplicatesList.push(rideToPush);
      }
    });
  }

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