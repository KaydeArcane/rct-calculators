import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPricesComponent } from './shop-prices.component';

describe('ShopPricesComponent', () => {
  let component: ShopPricesComponent;
  let fixture: ComponentFixture<ShopPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
