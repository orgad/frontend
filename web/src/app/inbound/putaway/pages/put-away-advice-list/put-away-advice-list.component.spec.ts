import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAwayAdviceListComponent } from './put-away-advice-list.component';

describe('PutAwayAdviceListComponent', () => {
  let component: PutAwayAdviceListComponent;
  let fixture: ComponentFixture<PutAwayAdviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutAwayAdviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutAwayAdviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
