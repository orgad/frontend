import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCheckTaskListComponent } from './stock-check-task-list.component';

describe('StockCheckTaskListComponent', () => {
  let component: StockCheckTaskListComponent;
  let fixture: ComponentFixture<StockCheckTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCheckTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCheckTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
