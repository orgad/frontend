import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SkuService } from '../../services/sku.service';
import { OuterProductService } from 'src/app/outer/prod/outer-product.service';

@Component({
  selector: 'sku-add-form',
  templateUrl: './sku-add-form.component.html',
  styleUrls: ['./sku-add-form.component.css']
})
export class SkuAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  prods: BasicData[];
  sku: SkuModel = {
    id: 0, code: '', name: "", barcode: "", productId: 0, productCode: "",
    color: "", size: "", isLot: false, isSerial: false, comment: ""
  }

  constructor(private fb: FormBuilder, private skuService: SkuService, private prodService: OuterProductService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("sku.code", new FormControl('', Validators.required));
    this.validateForm.addControl("sku.name", new FormControl('', Validators.required));
    this.validateForm.addControl("sku.barcode", new FormControl('', Validators.required));
    this.validateForm.addControl("sku.productId", new FormControl('', Validators.required));
    this.validateForm.addControl("sku.color", new FormControl());
    this.validateForm.addControl("sku.size", new FormControl());
    this.validateForm.addControl("sku.isLot", new FormControl());
    this.validateForm.addControl("sku.isSerial", new FormControl());
    this.validateForm.addControl("sku.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.prodService.getList().subscribe(r => this.prods = r.data);
  }

  handleOk(): void {
    //获取参数
    this.sku.code = this.validateForm.controls["sku.code"].value;
    this.sku.name = this.validateForm.controls["sku.name"].value;
    this.sku.barcode = this.validateForm.controls["sku.barcode"].value;
    this.sku.productId = this.validateForm.controls["sku.productId"].value;

    let prod = this.prods.filter(x=>x.id == this.sku.productId)[0];
    this.sku.productCode = prod.code;

    this.sku.color = this.validateForm.controls["sku.color"].value;
    this.sku.size = this.validateForm.controls["sku.size"].value;
    this.sku.isLot = false;
    this.sku.isSerial = false;
    this.sku.comment = this.validateForm.controls["sku.comment"].value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a != "VALID") {
        checkStatus = false;
        console.log(a);
      }
    }

    if (checkStatus == true)
      this.setSku(this.sku);
  }

  private setSku(sku: SkuModel): void {
    this.skuService.setSku(sku)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  doOK(flag: boolean): void {
    this.resetForm();
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }
}
