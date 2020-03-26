import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhNavListComponent } from './wh-nav-list.component';

describe('WhNavListComponent', () => {
  let component: WhNavListComponent;
  let fixture: ComponentFixture<WhNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
