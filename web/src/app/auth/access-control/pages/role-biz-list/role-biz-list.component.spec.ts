import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBizListComponent } from './role-biz-list.component';

describe('RoleBizListComponent', () => {
  let component: RoleBizListComponent;
  let fixture: ComponentFixture<RoleBizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
