import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOverTaskListComponent } from './hand-over-task-list.component';

describe('HandOverTaskListComponent', () => {
  let component: HandOverTaskListComponent;
  let fixture: ComponentFixture<HandOverTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOverTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOverTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
