import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidePricesComponent } from './ride-prices.component';

describe('RidePricesComponent', () => {
  let component: RidePricesComponent;
  let fixture: ComponentFixture<RidePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
