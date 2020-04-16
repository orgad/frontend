import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnAddFormComponent } from './rn-add-form.component';

describe('RnAddFormComponent', () => {
  let component: RnAddFormComponent;
  let fixture: ComponentFixture<RnAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
