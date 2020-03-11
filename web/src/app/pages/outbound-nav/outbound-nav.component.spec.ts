import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundNavComponent } from './outbound-nav.component';

describe('OutboundNavComponent', () => {
  let component: OutboundNavComponent;
  let fixture: ComponentFixture<OutboundNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
