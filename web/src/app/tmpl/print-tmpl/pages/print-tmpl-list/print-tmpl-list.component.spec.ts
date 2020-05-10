import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTmplListComponent } from './print-tmpl-list.component';

describe('PrintTmplListComponent', () => {
  let component: PrintTmplListComponent;
  let fixture: ComponentFixture<PrintTmplListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTmplListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTmplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
