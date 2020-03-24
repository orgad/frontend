import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressAddFormComponent } from './express-add-form.component';

describe('ExpressAddFormComponent', () => {
  let component: ExpressAddFormComponent;
  let fixture: ComponentFixture<ExpressAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
