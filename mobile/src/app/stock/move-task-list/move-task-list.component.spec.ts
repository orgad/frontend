import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveTaskListComponent } from './move-task-list.component';

describe('MoveTaskListComponent', () => {
  let component: MoveTaskListComponent;
  let fixture: ComponentFixture<MoveTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
