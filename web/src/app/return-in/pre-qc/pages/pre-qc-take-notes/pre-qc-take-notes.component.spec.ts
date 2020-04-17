import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQcTakeNotesComponent } from './pre-qc-take-notes.component';

describe('PreQcTakeNotesComponent', () => {
  let component: PreQcTakeNotesComponent;
  let fixture: ComponentFixture<PreQcTakeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreQcTakeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQcTakeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
