import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupNavListComponent } from './sup-nav-list.component';

describe('SupNavListComponent', () => {
  let component: SupNavListComponent;
  let fixture: ComponentFixture<SupNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
