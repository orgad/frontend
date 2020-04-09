import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjListComponent } from './adj-list.component';

describe('AdjListComponent', () => {
  let component: AdjListComponent;
  let fixture: ComponentFixture<AdjListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
