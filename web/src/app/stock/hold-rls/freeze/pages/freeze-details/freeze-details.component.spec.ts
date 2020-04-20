import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeDetailsComponent } from './freeze-details.component';

describe('FreezeDetailsComponent', () => {
  let component: FreezeDetailsComponent;
  let fixture: ComponentFixture<FreezeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
