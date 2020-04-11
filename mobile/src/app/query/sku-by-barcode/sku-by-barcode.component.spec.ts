import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuByBarcodeComponent } from './sku-by-barcode.component';

describe('SkuByBarcodeComponent', () => {
  let component: SkuByBarcodeComponent;
  let fixture: ComponentFixture<SkuByBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuByBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuByBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
