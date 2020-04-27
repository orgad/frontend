import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingNoComponent } from './tracking-no.component';

describe('TrackingNoComponent', () => {
  let component: TrackingNoComponent;
  let fixture: ComponentFixture<TrackingNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
