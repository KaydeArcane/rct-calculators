import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShopItemPrice } from '@models/shop-item-price.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() item: ShopItemPrice;
  @Output() itemDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  isUmbrella = () => {
    return this.item.getName() === 'Umbrella';
  }

  deleteItem = () => {
    this.itemDelete.emit();
  }
}
