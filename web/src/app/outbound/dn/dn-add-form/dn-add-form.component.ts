import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { DnService } from '../services/dn.service';

@Component({
  selector: 'dn-add-form',
  templateUrl: './dn-add-form.component.html',
  styleUrls: ['./dn-add-form.component.css']
})
export class DnAddFormComponent implements OnInit {

  @Input() formVisible:boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  dn: DnModel = { id: 0,code:"",batchNo:"", whId: 0, custId: 0, brandId: 0, bizCode: "", goodsType: "", status: '', qty: 0,refNo:"",transCode:"",
  srcCode:"",expectAt:null }

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  constructor(private fb:FormBuilder,private basicDataService:BasicDataService,private dnService:DnService) { 
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("dn.whId", new FormControl());
    this.validateForm.addControl("dn.custId", new FormControl());
    this.validateForm.addControl("dn.brandId", new FormControl());
    this.validateForm.addControl("dn.bizCode", new FormControl());
    this.validateForm.addControl("dn.goodsType", new FormControl());
    this.validateForm.addControl("dn.payment", new FormControl());
    this.validateForm.addControl("dn.refNo", new FormControl());
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
    this.dn.whId = this.validateForm.controls["dn.whId"].value;
    this.dn.custId = this.validateForm.controls["dn.custId"].value;
    this.dn.brandId = this.validateForm.controls["dn.brandId"].value;
    this.dn.bizCode = this.validateForm.controls["dn.bizCode"].value;
    this.dn.goodsType = this.validateForm.controls["dn.goodsType"].value;
    this.dn.refNo = this.validateForm.controls["dn.refNo"].value;
    this.setDn(this.dn);
  }

  private setDn(dn: DnModel): void {
    this.dnService.add(dn)
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