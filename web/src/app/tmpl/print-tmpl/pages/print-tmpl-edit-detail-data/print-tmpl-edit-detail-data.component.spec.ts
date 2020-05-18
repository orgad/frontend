import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTmplEditDetailDataComponent } from './print-tmpl-edit-detail-data.component';

describe('PrintTmplEditDetailDataComponent', () => {
  let component: PrintTmplEditDetailDataComponent;
  let fixture: ComponentFixture<PrintTmplEditDetailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTmplEditDetailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTmplEditDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
