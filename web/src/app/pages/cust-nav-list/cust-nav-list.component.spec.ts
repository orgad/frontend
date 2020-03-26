import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNavListComponent } from './cust-nav-list.component';

describe('CustNavListComponent', () => {
  let component: CustNavListComponent;
  let fixture: ComponentFixture<CustNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
