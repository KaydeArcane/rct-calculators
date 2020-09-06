import { Ride } from '@models/ride.model';
import { CommonUtils } from '@common/common.utils';

export class GuestCap extends Ride {
  private uniqueId: string = CommonUtils.ID();
  public nickname: string;
  public passesHarderGen: boolean = false;

  constructor(obj?) {
    super(obj);

    if (obj) {
      if (obj['nickname']) {
        this.nickname = obj['nickname'];
      }
      this.passesHarderGen = obj['passesHarderGen'];
    }
  }

  getUniqueId = (): string => this.uniqueId;

  // Returns an individual item's SGC contribution
  getGuestCapValue = () => {
    return this.getGuestCap().toString() + (this.passesHarderGen ? ' + ' + this.getGuestCap() * 2 : '');
  }
}