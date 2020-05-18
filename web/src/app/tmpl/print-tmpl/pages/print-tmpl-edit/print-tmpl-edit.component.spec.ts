import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTmplEditComponent } from './print-tmpl-edit.component';

describe('PrintTmplEditComponent', () => {
  let component: PrintTmplEditComponent;
  let fixture: ComponentFixture<PrintTmplEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTmplEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTmplEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
