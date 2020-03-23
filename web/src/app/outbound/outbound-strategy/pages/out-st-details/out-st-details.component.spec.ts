import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStDetailsComponent } from './out-st-details.component';

describe('OutStDetailsComponent', () => {
  let component: OutStDetailsComponent;
  let fixture: ComponentFixture<OutStDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutStDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutStDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
