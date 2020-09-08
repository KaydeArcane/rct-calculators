import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionDropdownComponent } from './attraction-dropdown.component';

describe('AttractionDropdownComponent', () => {
  let component: AttractionDropdownComponent;
  let fixture: ComponentFixture<AttractionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
