import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTakePhotoComponent } from './mat-take-photo.component';

describe('MatTakePhotoComponent', () => {
  let component: MatTakePhotoComponent;
  let fixture: ComponentFixture<MatTakePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTakePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTakePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
