import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressListComponent } from './express-list.component';

describe('ExpressListComponent', () => {
  let component: ExpressListComponent;
  let fixture: ComponentFixture<ExpressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
