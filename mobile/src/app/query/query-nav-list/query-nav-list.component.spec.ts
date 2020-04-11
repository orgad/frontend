import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryNavListComponent } from './query-nav-list.component';

describe('QueryNavListComponent', () => {
  let component: QueryNavListComponent;
  let fixture: ComponentFixture<QueryNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
