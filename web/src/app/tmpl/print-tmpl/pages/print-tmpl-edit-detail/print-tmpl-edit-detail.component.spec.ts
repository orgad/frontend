import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTmplEditDetailComponent } from './print-tmpl-edit-detail.component';

describe('PrintTmplEditDetailComponent', () => {
  let component: PrintTmplEditDetailComponent;
  let fixture: ComponentFixture<PrintTmplEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTmplEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTmplEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
