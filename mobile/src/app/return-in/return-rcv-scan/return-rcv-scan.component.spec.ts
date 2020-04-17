import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRcvScanComponent } from './return-rcv-scan.component';

describe('ReturnRcvScanComponent', () => {
  let component: ReturnRcvScanComponent;
  let fixture: ComponentFixture<ReturnRcvScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnRcvScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRcvScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
