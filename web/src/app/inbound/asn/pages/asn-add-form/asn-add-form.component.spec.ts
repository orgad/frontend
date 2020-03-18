import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnAddFormComponent } from './asn-add-form.component';

describe('AsnAddFormComponent', () => {
  let component: AsnAddFormComponent;
  let fixture: ComponentFixture<AsnAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
