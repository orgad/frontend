import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAddFormComponent } from './nav-add-form.component';

describe('NavAddFormComponent', () => {
  let component: NavAddFormComponent;
  let fixture: ComponentFixture<NavAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
