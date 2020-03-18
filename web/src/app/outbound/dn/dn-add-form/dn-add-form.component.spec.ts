import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnAddFormComponent } from './dn-add-form.component';

describe('DnAddFormComponent', () => {
  let component: DnAddFormComponent;
  let fixture: ComponentFixture<DnAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
