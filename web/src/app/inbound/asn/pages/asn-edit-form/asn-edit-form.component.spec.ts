import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnEditFormComponent } from './asn-edit-form.component';

describe('AsnEditFormComponent', () => {
  let component: AsnEditFormComponent;
  let fixture: ComponentFixture<AsnEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
