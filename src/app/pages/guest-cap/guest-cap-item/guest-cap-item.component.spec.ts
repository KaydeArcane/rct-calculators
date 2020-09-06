import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCapItemComponent } from './guest-cap-item.component';

describe('GuestCapItemComponent', () => {
  let component: GuestCapItemComponent;
  let fixture: ComponentFixture<GuestCapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCapItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
