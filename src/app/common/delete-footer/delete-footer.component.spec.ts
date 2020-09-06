import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFooterComponent } from './delete-footer.component';

describe('DeleteFooterComponent', () => {
  let component: DeleteFooterComponent;
  let fixture: ComponentFixture<DeleteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
