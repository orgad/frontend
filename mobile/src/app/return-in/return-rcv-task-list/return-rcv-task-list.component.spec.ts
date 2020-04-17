import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRcvTaskListComponent } from './return-rcv-task-list.component';

describe('ReturnRcvTaskListComponent', () => {
  let component: ReturnRcvTaskListComponent;
  let fixture: ComponentFixture<ReturnRcvTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnRcvTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRcvTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
