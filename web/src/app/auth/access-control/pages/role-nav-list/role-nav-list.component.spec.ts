import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleNavListComponent } from './role-nav-list.component';

describe('RoleNavListComponent', () => {
  let component: RoleNavListComponent;
  let fixture: ComponentFixture<RoleNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
