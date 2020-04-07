import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCheckDetailsComponent } from './stock-check-details.component';

describe('StockCheckDetailsComponent', () => {
  let component: StockCheckDetailsComponent;
  let fixture: ComponentFixture<StockCheckDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCheckDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCheckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
