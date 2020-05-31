import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavListComponent } from './auth-nav-list.component';

describe('AuthNavListComponent', () => {
  let component: AuthNavListComponent;
  let fixture: ComponentFixture<AuthNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
