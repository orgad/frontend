import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStListComponent } from './out-st-list.component';

describe('OutStListComponent', () => {
  let component: OutStListComponent;
  let fixture: ComponentFixture<OutStListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutStListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutStListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
