import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavActionDetailListComponent } from './nav-action-detail-list.component';

describe('NavActionDetailListComponent', () => {
  let component: NavActionDetailListComponent;
  let fixture: ComponentFixture<NavActionDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavActionDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
