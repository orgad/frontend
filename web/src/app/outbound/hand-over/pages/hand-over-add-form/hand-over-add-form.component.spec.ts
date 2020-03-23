import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOverAddFormComponent } from './hand-over-add-form.component';

describe('HandOverAddFormComponent', () => {
  let component: HandOverAddFormComponent;
  let fixture: ComponentFixture<HandOverAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOverAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOverAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
