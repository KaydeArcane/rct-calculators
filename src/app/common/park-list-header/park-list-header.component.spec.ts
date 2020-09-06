import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkListHeaderComponent } from './park-list-header.component';

describe('ParkListHeaderComponent', () => {
  let component: ParkListHeaderComponent;
  let fixture: ComponentFixture<ParkListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
