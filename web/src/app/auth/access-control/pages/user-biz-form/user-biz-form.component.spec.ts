import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBizFormComponent } from './user-biz-form.component';

describe('UserBizFormComponent', () => {
  let component: UserBizFormComponent;
  let fixture: ComponentFixture<UserBizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
