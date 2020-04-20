import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeAddFormComponent } from './freeze-add-form.component';

describe('FreezeAddFormComponent', () => {
  let component: FreezeAddFormComponent;
  let fixture: ComponentFixture<FreezeAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
