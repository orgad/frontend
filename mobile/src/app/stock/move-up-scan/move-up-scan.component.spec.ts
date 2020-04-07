import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveUpScanComponent } from './move-up-scan.component';

describe('MoveUpScanComponent', () => {
  let component: MoveUpScanComponent;
  let fixture: ComponentFixture<MoveUpScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveUpScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveUpScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
