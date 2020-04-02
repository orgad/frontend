import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { DnService } from '../../services/dn.service';

@Component({
  selector: 'dn-edit-form',
  templateUrl: './dn-edit-form.component.html',
  styleUrls: ['./dn-edit-form.component.css']
})
export class DnEditFormComponent implements OnInit {

  @Input() editFormVisible: boolean;
  @Input() id: number;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  dn: DnModel = {
    id: 0, code: "", batchNo: "", whId: 0, custId: 0, brandId: 0, bizCode: "", goodsType: "", status: '', qty: 0, refNo: "", transCode: "",
    srcCode: "", expectAt: null,payment:0
  }

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService, private dnService: DnService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("dn.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.custId", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.bizCode", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.goodsType", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.payment", new FormControl('', Validators.required));
    this.validateForm.addControl("dn.refNo", new FormControl('', Validators.required));
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
    this.validateForm.controls["dn.brandId"].setValue(null);
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
    this.dn.id = this.id;
    this.dn.whId = this.validateForm.controls["dn.whId"].value;
    this.dn.custId = this.validateForm.controls["dn.custId"].value;
    this.dn.brandId = this.validateForm.controls["dn.brandId"].value;
    this.dn.bizCode = this.validateForm.controls["dn.bizCode"].value;
    this.dn.goodsType = this.validateForm.controls["dn.goodsType"].value;
    this.dn.refNo = this.validateForm.controls["dn.refNo"].value;
    this.dn.payment = this.validateForm.controls["dn.payment"].value;

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
      this.updateDn(this.dn);
  }

  getDn() {
    this.dnService.getDetails(this.id).subscribe(x => {
      this.dn.code = x.dn.code;
      this.showDn(x.dn);
    }
    );
  }

  private showDn(dn:Dn)
  {
    this.validateForm.controls["dn.whId"].setValue(dn.whId.toString());
    this.validateForm.controls["dn.custId"].setValue(dn.custId.toString());
    this.validateForm.controls["dn.brandId"].setValue(dn.brandId.toString());
    this.validateForm.controls["dn.bizCode"].setValue(dn.bizCode);
    this.validateForm.controls["dn.goodsType"].setValue(dn.goodsType);
    this.validateForm.controls["dn.refNo"].setValue(dn.refNo);
    this.validateForm.controls["dn.payment"].setValue(dn.payment);
  }

  private updateDn(dn: DnModel): void {
    this.dnService.update(dn)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

  doOK(flag: boolean): void {
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }
}
