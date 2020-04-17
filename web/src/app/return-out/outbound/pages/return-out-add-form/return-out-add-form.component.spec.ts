import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOutAddFormComponent } from './return-out-add-form.component';

describe('ReturnOutAddFormComponent', () => {
  let component: ReturnOutAddFormComponent;
  let fixture: ComponentFixture<ReturnOutAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOutAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOutAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
