import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNavListComponent } from './stock-nav-list.component';

describe('StockNavListComponent', () => {
  let component: StockNavListComponent;
  let fixture: ComponentFixture<StockNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
