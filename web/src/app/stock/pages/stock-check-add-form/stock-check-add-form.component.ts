import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { StockCheckService } from '../../services/stock-check.service';
import { UdcService } from 'src/app/outer/udc/udc.service';
import { SkuService } from 'src/app/product/sku/services/sku.service';
import { BinService } from 'src/app/warehouse/wh-bin/services/bin.service';

@Component({
  selector: 'stock-check-add-form',
  templateUrl: './stock-check-add-form.component.html',
  styleUrls: ['./stock-check-add-form.component.css']
})
export class StockCheckAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  typeCodes: UdcData[];
  typeModes: UdcData[];
  listOfOption : [{ id: number, code: string, name: string }];
  stockCheck: StockCheckAdd = { whId: 0, custId: 0, brandId: 0, goodsType: "", typeCode: "", typeMode: "", comment: "", checkLimits: [] };

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService,
    private udcService: UdcService, private skuService: SkuService,
    private binService: BinService,
    private stockCheckService: StockCheckService) {
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
    this.validateForm.addControl("stockCheck.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.custId", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.brandId", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.goodsType", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.typeCode", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.typeMode", new FormControl('', Validators.required));
    this.validateForm.addControl("selectIds", new FormControl('', Validators.required));
    this.validateForm.addControl("stockCheck.comment", new FormControl());
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
    this.typeCodes = this.udcService.getTypeCode();
    this.typeModes = this.udcService.getTypeMode();
  }

  onChange(value: string) {
    this.validateForm.controls["stockCheck.brandId"].setValue(null);
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
      this.stockCheck.checkLimits.push({
        itemId: id,
        itemCode: ids
      });
      
    }
    );

    //获取参数
    this.stockCheck.whId = this.validateForm.controls["stockCheck.whId"].value;
    this.stockCheck.custId = this.validateForm.controls["stockCheck.custId"].value;
    this.stockCheck.brandId = this.validateForm.controls["stockCheck.brandId"].value;
    this.stockCheck.goodsType = this.validateForm.controls["stockCheck.goodsType"].value;
    this.stockCheck.typeCode = this.validateForm.controls["stockCheck.typeCode"].value;
    this.stockCheck.typeMode = this.validateForm.controls["stockCheck.typeMode"].value;

    this.stockCheck.comment = this.validateForm.controls["stockCheck.comment"].value;

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
      this.setStockCheck(this.stockCheck);
  }

  private setStockCheck(stockCheck: StockCheckAdd): void {    
    this.stockCheckService.setStockCheck(stockCheck)
      .subscribe(item => {
        this.doOK(item != null);
      });
      
  }
}
