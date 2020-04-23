import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNavListComponent } from './basic-nav-list.component';

describe('BasicNavListComponent', () => {
  let component: BasicNavListComponent;
  let fixture: ComponentFixture<BasicNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
