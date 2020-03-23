import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOverScanComponent } from './hand-over-scan.component';

describe('HandOverScanComponent', () => {
  let component: HandOverScanComponent;
  let fixture: ComponentFixture<HandOverScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOverScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOverScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
