import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecheckScanComponent } from './recheck-scan.component';

describe('RecheckScanComponent', () => {
  let component: RecheckScanComponent;
  let fixture: ComponentFixture<RecheckScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecheckScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecheckScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
