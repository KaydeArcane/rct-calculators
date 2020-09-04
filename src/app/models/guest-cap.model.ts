import { Ride } from '@models/ride.model';
export class GuestCap extends Ride {
  public passesHarderGen: boolean = false;

  constructor(obj?) {
    super(obj);

    if (obj) {
      this.passesHarderGen = obj['passesHarderGen'];
    }
  }
}