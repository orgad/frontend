import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTaskListComponent } from './qc-task-list.component';

describe('QcTaskListComponent', () => {
  let component: QcTaskListComponent;
  let fixture: ComponentFixture<QcTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
