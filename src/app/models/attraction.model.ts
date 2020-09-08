import { CommonUtils } from '@common/common.utils';
import { Ratings } from '@models/ratings.model';
import { ShopItem } from '@models/shop-item.model';

export class Attraction {
  private uniqueId: string = CommonUtils.ID();
  private id: string;
  private name: string;
  public nickname: string;
  private type: string;
  private tracked: boolean;
  private guestCap: number;
  private ratings: Ratings;
  private items: ShopItem[];

  constructor (obj?) {
    if (obj) {
      this.id = obj['id'];
      this.name = obj['name'];
      this.nickname = obj['nickname'];
      this.type = obj['type'];
      this.tracked = obj['tracked'];
      this.guestCap = obj['guestCap'];
      this.ratings = obj['ratings'];
      this.items = obj['items'];
    }

    if (!this.nickname) {
      this.nickname = this.name + ' 1';
    }
    if (this.ratings) {
      this.ratings = new Ratings(this.ratings);
    }
    if (this.items) {
      const tempItems = [];
      this.items.forEach(item => {
        tempItems.push(new ShopItem(item));
      });
      Object.assign(this.items, tempItems);
    }
  }

  getUniqueId = (): string => this.uniqueId;
  getId = (): string => this.id;
  getName = (): string => this.name;
  getType = (): string => this.type;
  getTracked = (): boolean => this.tracked;
  getGuestCap = (): number => this.guestCap;
  getRatings = (): Ratings => this.ratings;
  getItems = (): ShopItem[] => this.items;

  setDefaultNickname = (list: Attraction[]) => {
    let nameCount = 1;
    let reachedUnusedCount = false;

    // Iterate thru rides checking for all default nicknames for duplicate rides
    while(!reachedUnusedCount) {
      reachedUnusedCount = true;
      list.every((pr) => {
        if (pr.getName() === this.getName() && pr.nickname === pr.getName() + ' ' + nameCount) {
          nameCount += 1;
          reachedUnusedCount = false;
          return false;
        }
        return true;
      });
    }
    // Set default ride nickname to appropriate number
    this.nickname = this.getName() + ' ' + nameCount;
  }
}