import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepStDetailsComponent } from './rep-st-details.component';

describe('RepStDetailsComponent', () => {
  let component: RepStDetailsComponent;
  let fixture: ComponentFixture<RepStDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepStDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepStDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
