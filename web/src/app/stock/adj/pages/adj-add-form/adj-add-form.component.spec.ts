import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjAddFormComponent } from './adj-add-form.component';

describe('AdjAddFormComponent', () => {
  let component: AdjAddFormComponent;
  let fixture: ComponentFixture<AdjAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
