import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeListComponent } from './freeze-list.component';

describe('FreezeListComponent', () => {
  let component: FreezeListComponent;
  let fixture: ComponentFixture<FreezeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
