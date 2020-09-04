import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideItemComponent } from './ride-item.component';

describe('RideItemComponent', () => {
  let component: RideItemComponent;
  let fixture: ComponentFixture<RideItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
