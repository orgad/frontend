import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQcDetailsComponent } from './pre-qc-details.component';

describe('PreQcDetailsComponent', () => {
  let component: PreQcDetailsComponent;
  let fixture: ComponentFixture<PreQcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreQcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
