import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnDetailsComponent } from './rn-details.component';

describe('RnDetailsComponent', () => {
  let component: RnDetailsComponent;
  let fixture: ComponentFixture<RnDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
