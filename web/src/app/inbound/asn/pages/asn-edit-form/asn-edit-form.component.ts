import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { AsnService } from '../../services/asn.service';

@Component({
  selector: 'asn-edit-form',
  templateUrl: './asn-edit-form.component.html',
  styleUrls: ['./asn-edit-form.component.css']
})
export class AsnEditFormComponent implements OnInit {

  @Input() editFormVisible: boolean;
  @Input() id: number;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  asn: AsnModel = {
    id: 0, whId: 0, custId: 0, brandId: 0, bizCode: "", code: "",
    goodsType: "", invoiceNo: "", isCiq: false, status: '', checkStatus: '', pieceQty: 0,
    refCode: "", comment: ""
  }

  constructor(private fb: FormBuilder,
    private asnService: AsnService, private basicDataService: BasicDataService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  getAsn() {
    this.asnService.getAsn(this.id).subscribe(x => {
      this.asn.code = x.asn.code;
      this.showAsn(x.asn);
    }
    );
  }

  private showAsn(asn: Asn) {
    this.validateForm.controls["asn.whId"].setValue(asn.whId.toString());
    this.validateForm.controls["asn.custId"].setValue(asn.custId.toString());
    this.validateForm.controls["asn.brandId"].setValue(asn.brandId.toString());
    this.validateForm.controls["asn.bizCode"].setValue(asn.bizCode);
    this.validateForm.controls["asn.goodsType"].setValue(asn.goodsType);
    this.validateForm.controls["asn.invoiceNo"].setValue(asn.invoiceNo);
    this.validateForm.controls["asn.refCode"].setValue(asn.refCode);
    this.validateForm.controls["asn.isCiq"].setValue(asn.isCiq);
    this.validateForm.controls["asn.comment"].setValue(asn.comment);
  }

  initAddForm(): void {
    this.validateForm.addControl("asn.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.custId", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.bizCode", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.goodsType", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.invoiceNo", new FormControl());
    this.validateForm.addControl("asn.refCode", new FormControl('', Validators.required));
    this.validateForm.addControl("asn.comment", new FormControl());
    this.validateForm.addControl("asn.isCiq", new FormControl());
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
    this.validateForm.controls["asn.brandId"].setValue(null);
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
    this.asn.id = this.id;
    this.asn.whId = this.validateForm.controls["asn.whId"].value;
    this.asn.custId = this.validateForm.controls["asn.custId"].value;
    this.asn.brandId = this.validateForm.controls["asn.brandId"].value;
    this.asn.bizCode = this.validateForm.controls["asn.bizCode"].value;
    this.asn.code = this.validateForm.controls["asn.code"].value;
    this.asn.goodsType = this.validateForm.controls["asn.goodsType"].value;
    this.asn.invoiceNo = this.validateForm.controls["asn.invoiceNo"].value;
    this.asn.refCode = this.validateForm.controls["asn.refCode"].value;
    this.asn.comment = this.validateForm.controls["asn.comment"].value;
    this.asn.isCiq = false;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a == "INVALID") {
        checkStatus = false;
      }
    }

    if (checkStatus == true)
      this.setAsn(this.asn);
  }

  private setAsn(asn: AsnModel): void {
    this.asnService.updateAsn(asn)
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
