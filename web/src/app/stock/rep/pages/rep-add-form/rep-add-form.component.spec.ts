import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepAddFormComponent } from './rep-add-form.component';

describe('RepAddFormComponent', () => {
  let component: RepAddFormComponent;
  let fixture: ComponentFixture<RepAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
