import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecheckTaskListComponent } from './recheck-task-list.component';

describe('RecheckTaskListComponent', () => {
  let component: RecheckTaskListComponent;
  let fixture: ComponentFixture<RecheckTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecheckTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecheckTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
