import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepStListComponent } from './rep-st-list.component';

describe('RepStListComponent', () => {
  let component: RepStListComponent;
  let fixture: ComponentFixture<RepStListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepStListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepStListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
