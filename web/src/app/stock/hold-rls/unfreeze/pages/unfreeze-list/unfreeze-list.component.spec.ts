import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfreezeListComponent } from './unfreeze-list.component';

describe('UnfreezeListComponent', () => {
  let component: UnfreezeListComponent;
  let fixture: ComponentFixture<UnfreezeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfreezeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfreezeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
