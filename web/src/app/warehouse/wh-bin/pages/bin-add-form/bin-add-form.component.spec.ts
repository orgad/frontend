import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinAddFormComponent } from './bin-add-form.component';

describe('BinAddFormComponent', () => {
  let component: BinAddFormComponent;
  let fixture: ComponentFixture<BinAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
