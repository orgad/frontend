import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTmplListComponent } from './import-tmpl-list.component';

describe('ImportTmplListComponent', () => {
  let component: ImportTmplListComponent;
  let fixture: ComponentFixture<ImportTmplListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTmplListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTmplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
