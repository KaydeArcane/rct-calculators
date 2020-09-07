import { Ride } from '@models/ride.model';
import { CommonUtils } from '@common/common.utils';

export class GuestCap extends Ride {
  public passesHarderGen: boolean = false;
  public quantity: number = 1;

  constructor(obj?) {
    super(obj);

    if (obj) {
      this.passesHarderGen = obj['passesHarderGen'];
      this.quantity = obj['quantity'];
    }
  }

  // Returns an individual item's SGC contribution
  getGuestCapValue = () => {
    return this.getGuestCap().toString() + (this.passesHarderGen ? ' + ' + this.getGuestCap() * 2 : '');
  }
}