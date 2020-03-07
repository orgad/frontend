import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InStListComponent } from './in-st-list.component';

describe('InStListComponent', () => {
  let component: InStListComponent;
  let fixture: ComponentFixture<InStListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InStListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InStListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
