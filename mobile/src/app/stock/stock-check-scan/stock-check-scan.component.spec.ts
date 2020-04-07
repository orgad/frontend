import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCheckScanComponent } from './stock-check-scan.component';

describe('StockCheckScanComponent', () => {
  let component: StockCheckScanComponent;
  let fixture: ComponentFixture<StockCheckScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCheckScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCheckScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
