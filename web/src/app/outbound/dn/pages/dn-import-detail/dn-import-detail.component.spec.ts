import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnImportDetailComponent } from './dn-import-detail.component';

describe('DnImportDetailComponent', () => {
  let component: DnImportDetailComponent;
  let fixture: ComponentFixture<DnImportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnImportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnImportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
