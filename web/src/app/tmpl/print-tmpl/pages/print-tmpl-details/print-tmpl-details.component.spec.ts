import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTmplDetailsComponent } from './print-tmpl-details.component';

describe('PrintTmplDetailsComponent', () => {
  let component: PrintTmplDetailsComponent;
  let fixture: ComponentFixture<PrintTmplDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTmplDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTmplDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
