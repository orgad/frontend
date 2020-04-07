import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCheckAddFormComponent } from './stock-check-add-form.component';

describe('StockCheckAddFormComponent', () => {
  let component: StockCheckAddFormComponent;
  let fixture: ComponentFixture<StockCheckAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCheckAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCheckAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
