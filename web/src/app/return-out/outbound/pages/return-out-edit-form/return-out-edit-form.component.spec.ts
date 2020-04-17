import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOutEditFormComponent } from './return-out-edit-form.component';

describe('ReturnOutEditFormComponent', () => {
  let component: ReturnOutEditFormComponent;
  let fixture: ComponentFixture<ReturnOutEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOutEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOutEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
