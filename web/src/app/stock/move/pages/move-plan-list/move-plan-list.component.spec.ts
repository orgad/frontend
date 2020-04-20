import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePlanListComponent } from './move-plan-list.component';

describe('MovePlanListComponent', () => {
  let component: MovePlanListComponent;
  let fixture: ComponentFixture<MovePlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovePlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
