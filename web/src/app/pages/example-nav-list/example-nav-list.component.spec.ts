import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNavListComponent } from './example-nav-list.component';

describe('ExampleNavListComponent', () => {
  let component: ExampleNavListComponent;
  let fixture: ComponentFixture<ExampleNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
