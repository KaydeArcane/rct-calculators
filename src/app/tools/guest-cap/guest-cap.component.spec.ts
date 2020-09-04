import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCapComponent } from './guest-cap.component';

describe('GuestCapComponent', () => {
  let component: GuestCapComponent;
  let fixture: ComponentFixture<GuestCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
