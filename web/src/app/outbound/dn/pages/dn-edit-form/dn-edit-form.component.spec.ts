import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnEditFormComponent } from './dn-edit-form.component';

describe('DnEditFormComponent', () => {
  let component: DnEditFormComponent;
  let fixture: ComponentFixture<DnEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
