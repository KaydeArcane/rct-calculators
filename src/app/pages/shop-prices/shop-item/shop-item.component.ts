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

  // Return if item is an umbrella (has ID of 34)
  isUmbrella = () => {
    return this.item.getId() === '34';
  }

  // Emits delete action to parent
  deleteItem = () => {
    this.itemDelete.emit();
  }
}
