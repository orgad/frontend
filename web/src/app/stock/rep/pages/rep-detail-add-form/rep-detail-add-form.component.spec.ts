import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDetailAddFormComponent } from './rep-detail-add-form.component';

describe('RepDetailAddFormComponent', () => {
  let component: RepDetailAddFormComponent;
  let fixture: ComponentFixture<RepDetailAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepDetailAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepDetailAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
