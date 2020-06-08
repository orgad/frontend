import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleNavFormComponent } from './role-nav-form.component';

describe('RoleNavFormComponent', () => {
  let component: RoleNavFormComponent;
  let fixture: ComponentFixture<RoleNavFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleNavFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNavFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
