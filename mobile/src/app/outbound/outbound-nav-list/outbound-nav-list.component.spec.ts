import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundNavListComponent } from './outbound-nav-list.component';

describe('OutboundNavListComponent', () => {
  let component: OutboundNavListComponent;
  let fixture: ComponentFixture<OutboundNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
