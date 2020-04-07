import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDownScanComponent } from './move-down-scan.component';

describe('MoveDownScanComponent', () => {
  let component: MoveDownScanComponent;
  let fixture: ComponentFixture<MoveDownScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveDownScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveDownScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
