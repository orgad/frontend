import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InStDetailsComponent } from './in-st-details.component';

describe('InStDetailsComponent', () => {
  let component: InStDetailsComponent;
  let fixture: ComponentFixture<InStDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InStDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InStDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
