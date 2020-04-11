import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtByBarcodeComponent } from './invt-by-barcode.component';

describe('InvtByBarcodeComponent', () => {
  let component: InvtByBarcodeComponent;
  let fixture: ComponentFixture<InvtByBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvtByBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvtByBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
