import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptLogListComponent } from './opt-log-list.component';

describe('OptLogListComponent', () => {
  let component: OptLogListComponent;
  let fixture: ComponentFixture<OptLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
