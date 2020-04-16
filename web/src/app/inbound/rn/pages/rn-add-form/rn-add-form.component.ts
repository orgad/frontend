import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RnService } from 'src/app/inbound/rn/services/rn.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'rn-add-form',
  templateUrl: './rn-add-form.component.html',
  styleUrls: ['./rn-add-form.component.css']
})
export class RnAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  rn: RnModel = {
    id: 0, code: '', whId: 0, custId: 0, brandId: 0, bizCode: "", goodsType: "", status: '', pkgStatus: 0, refCode: '',
    refPo: '', batchNo: '', transCode: '', typeCode: '', srcCode: '', courier: '', trackingNo: '',comment:""
  }

  constructor(private basicDataService: BasicDataService, private fb: FormBuilder, private rnService: RnService, ) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("rn.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.custId", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.bizCode", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.goodsType", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.refCode", new FormControl('', Validators.required));
    this.validateForm.addControl("rn.courier", new FormControl());
    this.validateForm.addControl("rn.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
    this.basicDataService.getCustList().subscribe(
      result => {
        this.custs = result.data;
      }
    );
  }

  onChange(value: string) {
    this.validateForm.controls["rn.brandId"].setValue(null);
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

  handleOk(): void {
    //获取参数
    this.rn.whId = this.validateForm.controls["rn.whId"].value;
    this.rn.custId = this.validateForm.controls["rn.custId"].value;
    this.rn.brandId = this.validateForm.controls["rn.brandId"].value;
    this.rn.bizCode = this.validateForm.controls["rn.bizCode"].value;
    this.rn.goodsType = this.validateForm.controls["rn.goodsType"].value;
    this.rn.refCode = this.validateForm.controls["rn.refCode"].value;

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
      this.setRn(this.rn);
  }

  private setRn(rn: RnModel): void {
    this.rnService.setRn(rn)
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
