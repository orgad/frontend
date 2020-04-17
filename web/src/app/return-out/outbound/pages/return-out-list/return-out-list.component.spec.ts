import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOutListComponent } from './return-out-list.component';

describe('ReturnOutListComponent', () => {
  let component: ReturnOutListComponent;
  let fixture: ComponentFixture<ReturnOutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
