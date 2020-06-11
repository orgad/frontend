import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavActionAddFormComponent } from './nav-action-add-form.component';

describe('NavActionAddFormComponent', () => {
  let component: NavActionAddFormComponent;
  let fixture: ComponentFixture<NavActionAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavActionAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
