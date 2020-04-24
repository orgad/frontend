import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPrintComponent } from './cloud-print.component';

describe('CloudPrintComponent', () => {
  let component: CloudPrintComponent;
  let fixture: ComponentFixture<CloudPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
