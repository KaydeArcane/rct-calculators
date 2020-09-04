import { Ratings } from '@models/ratings.model';
export class Ride {
  private id: string;
  private name: string;
  private type: string;
  private tracked: boolean;
  private guestCap: number;
  private ratings: Ratings;

  constructor (obj?) {
    if (obj) {
      this.id = obj['id'];
      this.name = obj['name'];
      this.type = obj['type'];
      this.tracked = obj['tracked'];
      this.guestCap = obj['guestCap'];
      this.ratings = obj['ratings'];
    }

    if (this.ratings) {
      this.ratings = new Ratings(this.ratings);
    }
  }

  getId = (): string => this.id;
  getName = (): string => this.name;
  getType = (): string => this.type;
  getTracked = (): boolean => this.tracked;
  getGuestCap = (): number => this.guestCap;
  getRatings = (): Ratings => this.ratings;
}