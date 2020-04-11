import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtByBinComponent } from './invt-by-bin.component';

describe('InvtByBinComponent', () => {
  let component: InvtByBinComponent;
  let fixture: ComponentFixture<InvtByBinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvtByBinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvtByBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
