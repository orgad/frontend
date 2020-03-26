import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdNavListComponent } from './prod-nav-list.component';

describe('ProdNavListComponent', () => {
  let component: ProdNavListComponent;
  let fixture: ComponentFixture<ProdNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
