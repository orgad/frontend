import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgScanComponent } from './pkg-scan.component';

describe('PkgScanComponent', () => {
  let component: PkgScanComponent;
  let fixture: ComponentFixture<PkgScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
