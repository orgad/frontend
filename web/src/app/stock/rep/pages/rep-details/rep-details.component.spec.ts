import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDetailsComponent } from './rep-details.component';

describe('RepDetailsComponent', () => {
  let component: RepDetailsComponent;
  let fixture: ComponentFixture<RepDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
