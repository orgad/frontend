import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { FreezeService } from '../../services/freeze.service';
import { UdcService } from 'src/app/outer/udc/udc.service';
import { SkuService } from 'src/app/product/sku/services/sku.service';
import { BinService } from 'src/app/warehouse/wh-bin/services/bin.service';

@Component({
  selector: 'freeze-add-form',
  templateUrl: './freeze-add-form.component.html',
  styleUrls: ['./freeze-add-form.component.css']
})
export class FreezeAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  typeCodes: UdcData[];
  typeModes: UdcData[];
  listOfOption : [{ id: number, code: string, name: string }];
  freeze: FreezeAdd = { whId: 0, custId: 0, brandId: 0, goodsType: "", reasonCode: "", typeMode: "", comment: "", checkLimits: [] };

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService,
    private udcService: UdcService, private skuService: SkuService,
    private binService: BinService,
    private freezeService: FreezeService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
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

  initAddForm(): void {
    this.validateForm.addControl("freeze.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.custId", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.goodsType", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.typeCode", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.typeMode", new FormControl('', Validators.required));
    this.validateForm.addControl("selectIds", new FormControl('', Validators.required));
    this.validateForm.addControl("freeze.comment", new FormControl());
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
    this.typeCodes = this.udcService.getFreezeReasonCode();
    this.typeModes = this.udcService.getTypeMode();
  }

  onChange(value: string) {
    this.validateForm.controls["freeze.brandId"].setValue(null);
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

  onTypeModeChange(value: string) {
    this.validateForm.controls["selectIds"].setValue(null);
    this.listOfOption = [{ id: 0, code: "", name: "" }];
    if (value == "BySku") {
      this.getSkuList();
    }
    if (value == "ByBin") {
      this.getBinList();
    }
    
  }

  private getSkuList() {
    this.skuService.getList().subscribe(r => {
      r.data.forEach(item => this.listOfOption.push({ id: item.id, code: item.code, name: item.code }));
    });
  }

  private getBinList() {
    this.binService.getList().subscribe(r => {
      r.data.forEach(item => this.listOfOption.push({ id: item.id, code: item.code, name: item.code }));
    });
  }

  handleOk(): void {

    let selectIds = this.validateForm.controls["selectIds"].value;
    selectIds.forEach(ids => {
      
      let id = this.listOfOption.find(x => x.code == ids).id;      
      this.freeze.checkLimits.push({
        itemId: id,
        itemCode: ids
      });
      
    }
    );

    //获取参数
    this.freeze.whId = this.validateForm.controls["freeze.whId"].value;
    this.freeze.custId = this.validateForm.controls["freeze.custId"].value;
    this.freeze.brandId = this.validateForm.controls["freeze.brandId"].value;
    this.freeze.goodsType = this.validateForm.controls["freeze.goodsType"].value;
    this.freeze.reasonCode = this.validateForm.controls["freeze.typeCode"].value;
    this.freeze.typeMode = this.validateForm.controls["freeze.typeMode"].value;

    this.freeze.comment = this.validateForm.controls["freeze.comment"].value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a != "VALID") {
        checkStatus = false;
      }
    }

    if (checkStatus == true)
      this.setFreeze(this.freeze);
  }

  private setFreeze(freeze: FreezeAdd): void {    
    this.freezeService.setFreeze(freeze)
      .subscribe(item => {
        this.doOK(item != null);
      });
      
  }

}
