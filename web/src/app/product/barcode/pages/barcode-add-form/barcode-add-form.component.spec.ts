import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeAddFormComponent } from './barcode-add-form.component';

describe('BarcodeAddFormComponent', () => {
  let component: BarcodeAddFormComponent;
  let fixture: ComponentFixture<BarcodeAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
