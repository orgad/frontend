import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTaskListComponent } from './pick-task-list.component';

describe('PickTaskListComponent', () => {
  let component: PickTaskListComponent;
  let fixture: ComponentFixture<PickTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
