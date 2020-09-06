import { Ride } from '@models/ride.model';
import { CommonUtils } from '@common/common.utils';

export class GuestCap extends Ride {
  public passesHarderGen: boolean = false;

  constructor(obj?) {
    super(obj);

    if (obj) {
      this.passesHarderGen = obj['passesHarderGen'];
    }
  }

  // Returns an individual item's SGC contribution
  getGuestCapValue = () => {
    return this.getGuestCap().toString() + (this.passesHarderGen ? ' + ' + this.getGuestCap() * 2 : '');
  }
}