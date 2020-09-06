import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemDropdownComponent } from './shop-item-dropdown.component';

describe('ShopItemDropdownComponent', () => {
  let component: ShopItemDropdownComponent;
  let fixture: ComponentFixture<ShopItemDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
