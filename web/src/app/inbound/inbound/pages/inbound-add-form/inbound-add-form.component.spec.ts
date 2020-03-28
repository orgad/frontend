import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundAddFormComponent } from './inbound-add-form.component';

describe('InboundAddFormComponent', () => {
  let component: InboundAddFormComponent;
  let fixture: ComponentFixture<InboundAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
