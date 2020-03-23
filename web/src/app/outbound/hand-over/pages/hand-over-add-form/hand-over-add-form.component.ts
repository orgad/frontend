import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { HandOverService } from '../../services/hand-over.service';

@Component({
  selector: 'hand-over-add-form',
  templateUrl: './hand-over-add-form.component.html',
  styleUrls: ['./hand-over-add-form.component.css']
})
export class HandOverAddFormComponent implements OnInit {

  @Input() formVisible:boolean;
  @Output() visibleChangeBack = new EventEmitter();

  hd:HandOver = {id: 0,code: "",store: 0,whId:0,custId:0,
    qty: 0,cartonQty: 0,firstScanAt: null,lastScanAt: null,
    isCancel: false,isConfirm: false,comment: "",
    createdBy: "",createdTime: null,lastModifiedBy: "",lastModifiedTime: null};

  whs: BasicData[];
  custs: BasicData[];
  stores:BasicData[];

  validateForm: FormGroup;

  constructor(private fb:FormBuilder,private basicDataService:BasicDataService,
    private hdService:HandOverService) {
    this.validateForm = this.fb.group(["validateForm"]);
   }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("hd.whId", new FormControl());
    this.validateForm.addControl("hd.custId", new FormControl());
    this.validateForm.addControl("hd.store", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
    this.basicDataService.getCustList().subscribe(
      result => {
        console.log(result);
        this.custs = result.data;
      }
    );
  }

  onChange(value: string) {
    this.validateForm.controls["hd.store"].setValue(null);
    this.getStoreByCustId(value);
  }

  getStoreByCustId(custId: string) {
    this.basicDataService.getShopList(custId).subscribe(
      result => {
        this.stores = result.data;
      }
    );
  }

  handleOk(): void {
    //获取参数
    this.hd.whId = this.validateForm.controls["hd.whId"].value;
    this.hd.custId = this.validateForm.controls["hd.custId"].value;
    this.hd.store = this.validateForm.controls["hd.store"].value;
    this.setHandOver(this.hd);
  }

  private setHandOver(hd: HandOver): void {
    this.hdService.add(hd)
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
