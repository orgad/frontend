import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuAddFormComponent } from './sku-add-form.component';

describe('SkuAddFormComponent', () => {
  let component: SkuAddFormComponent;
  let fixture: ComponentFixture<SkuAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
