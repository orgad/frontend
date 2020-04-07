import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAddFormComponent } from './move-add-form.component';

describe('MoveAddFormComponent', () => {
  let component: MoveAddFormComponent;
  let fixture: ComponentFixture<MoveAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
