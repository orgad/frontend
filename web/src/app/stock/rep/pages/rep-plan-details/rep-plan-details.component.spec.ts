import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepPlanDetailsComponent } from './rep-plan-details.component';

describe('RepPlanDetailsComponent', () => {
  let component: RepPlanDetailsComponent;
  let fixture: ComponentFixture<RepPlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepPlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
