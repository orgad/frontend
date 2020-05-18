import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplNavListComponent } from './tmpl-nav-list.component';

describe('TmplNavListComponent', () => {
  let component: TmplNavListComponent;
  let fixture: ComponentFixture<TmplNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
