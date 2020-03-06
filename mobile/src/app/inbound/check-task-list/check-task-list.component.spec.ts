import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTaskListComponent } from './check-task-list.component';

describe('CheckTaskListComponent', () => {
  let component: CheckTaskListComponent;
  let fixture: ComponentFixture<CheckTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
