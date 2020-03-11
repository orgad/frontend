import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvtNavComponent } from './invt-nav.component';

describe('InvtNavComponent', () => {
  let component: InvtNavComponent;
  let fixture: ComponentFixture<InvtNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvtNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvtNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
