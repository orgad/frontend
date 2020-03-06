import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAwayTaskListComponent } from './put-away-task-list.component';

describe('PutAwayTaskListComponent', () => {
  let component: PutAwayTaskListComponent;
  let fixture: ComponentFixture<PutAwayTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutAwayTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutAwayTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
