import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDropdownComponent } from './ride-dropdown.component';

describe('RideDropdownComponent', () => {
  let component: RideDropdownComponent;
  let fixture: ComponentFixture<RideDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
