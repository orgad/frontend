import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizListComponent } from './biz-list.component';

describe('BizListComponent', () => {
  let component: BizListComponent;
  let fixture: ComponentFixture<BizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
