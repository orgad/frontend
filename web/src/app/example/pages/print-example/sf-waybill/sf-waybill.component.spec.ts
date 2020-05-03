import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfWaybillComponent } from './sf-waybill.component';

describe('SfWaybillComponent', () => {
  let component: SfWaybillComponent;
  let fixture: ComponentFixture<SfWaybillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfWaybillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfWaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
