import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundNavComponent } from './inbound-nav.component';

describe('InboundNavComponent', () => {
  let component: InboundNavComponent;
  let fixture: ComponentFixture<InboundNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
