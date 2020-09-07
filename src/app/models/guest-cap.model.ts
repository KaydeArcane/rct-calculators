import { Ride } from '@models/ride.model';
import { CommonUtils } from '@common/common.utils';

export class GuestCap extends Ride {
  public passesHarderGen: boolean = false;
  public quantity: number = 1;

  constructor(obj?) {
    super(obj);

    if (obj) {
      this.passesHarderGen = obj['passesHarderGen'];
      if (!isNaN(obj['quantity'])) {
        this.quantity = obj['quantity'];
      }
    }
  }

  // Returns an individual item's SGC contribution
  getGuestCapValue = () => {
    let value = '';
    if (this.passesHarderGen) {
      value = this.getGuestCap().toString() + ' + ' + (this.getGuestCap() * 2).toString();
    } else {
      value = (this.getGuestCap() * this.quantity).toString();
    }
    return value;
  }
}