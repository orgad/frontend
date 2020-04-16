import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnListComponent } from './rn-list.component';

describe('RnListComponent', () => {
  let component: RnListComponent;
  let fixture: ComponentFixture<RnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
