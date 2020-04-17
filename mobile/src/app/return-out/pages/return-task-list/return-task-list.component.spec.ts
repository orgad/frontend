import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTaskListComponent } from './return-task-list.component';

describe('ReturnTaskListComponent', () => {
  let component: ReturnTaskListComponent;
  let fixture: ComponentFixture<ReturnTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
