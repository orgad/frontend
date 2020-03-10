import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnCheckPhotosComponent } from './asn-check-photos.component';

describe('AsnCheckPhotosComponent', () => {
  let component: AsnCheckPhotosComponent;
  let fixture: ComponentFixture<AsnCheckPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnCheckPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnCheckPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
