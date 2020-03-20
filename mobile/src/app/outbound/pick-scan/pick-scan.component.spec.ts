import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickScanComponent } from './pick-scan.component';

describe('PickScanComponent', () => {
  let component: PickScanComponent;
  let fixture: ComponentFixture<PickScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
