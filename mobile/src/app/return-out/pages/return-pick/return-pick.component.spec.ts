import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPickComponent } from './return-pick.component';

describe('ReturnPickComponent', () => {
  let component: ReturnPickComponent;
  let fixture: ComponentFixture<ReturnPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
