import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQcListComponent } from './pre-qc-list.component';

describe('PreQcListComponent', () => {
  let component: PreQcListComponent;
  let fixture: ComponentFixture<PreQcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreQcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
