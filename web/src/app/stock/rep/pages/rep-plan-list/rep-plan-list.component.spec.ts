import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepPlanListComponent } from './rep-plan-list.component';

describe('RepPlanListComponent', () => {
  let component: RepPlanListComponent;
  let fixture: ComponentFixture<RepPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
