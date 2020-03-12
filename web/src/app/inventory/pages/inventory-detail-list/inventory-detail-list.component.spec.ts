import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailListComponent } from './inventory-detail-list.component';

describe('InventoryDetailListComponent', () => {
  let component: InventoryDetailListComponent;
  let fixture: ComponentFixture<InventoryDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
