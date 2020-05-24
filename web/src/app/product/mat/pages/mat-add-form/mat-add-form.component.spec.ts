import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAddFormComponent } from './mat-add-form.component';

describe('MatAddFormComponent', () => {
  let component: MatAddFormComponent;
  let fixture: ComponentFixture<MatAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
