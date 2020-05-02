import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})

export class ProductAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  brands: BasicData[];
  prod: ProductModel = {
    id: 0, brandId: 0, brandCode: "", code: '', name: "", comment: ""
  }

  constructor(private fb: FormBuilder,
    private prodService: ProductService, private basicService: BasicDataService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("prod.code", new FormControl('', Validators.required));
    this.validateForm.addControl("prod.name", new FormControl('', Validators.required));
    this.validateForm.addControl("prod.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("prod.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicService.getBrandAll().subscribe(r => this.brands = r.data);
  }

  handleOk(): void {
    this.validateAndSave();
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  doOK(flag: boolean): void {
    this.resetForm();
    this.visibleChangeBack.emit(!flag);
  }

  private validateAndSave() {
    //获取参数
    this.prod.code = this.validateForm.controls["prod.code"].value;
    this.prod.name = this.validateForm.controls["prod.name"].value;
    this.prod.brandId = this.validateForm.controls["prod.brandId"].value;

    let brand = this.brands.filter(x => x.id == this.prod.brandId)[0];
    this.prod.brandCode = brand.code;

    this.prod.comment = this.validateForm.controls["prod.comment"].value;

    let checkStatus = true;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

      for (const i in this.validateForm.controls) {
        let a = this.validateForm.controls[i].status;
        if (a != "VALID") {
          checkStatus = false;
        }
      } //for 结束
    }

    if (checkStatus == true)
      this.setProduct(this.prod);
  }

  private setProduct(prod: ProductModel): void {
    this.prodService.setProduct(prod)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }
}
