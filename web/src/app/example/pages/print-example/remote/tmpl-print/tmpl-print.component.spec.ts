import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplPrintComponent } from './tmpl-print.component';

describe('TmplPrintComponent', () => {
  let component: TmplPrintComponent;
  let fixture: ComponentFixture<TmplPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
