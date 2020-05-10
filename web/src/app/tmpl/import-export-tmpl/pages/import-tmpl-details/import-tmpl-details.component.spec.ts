import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTmplDetailsComponent } from './import-tmpl-details.component';

describe('ImportTmplDetailsComponent', () => {
  let component: ImportTmplDetailsComponent;
  let fixture: ComponentFixture<ImportTmplDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTmplDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTmplDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
