import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { InboundService } from '../../services/inbound.service';

@Component({
  selector: 'inbound-add-form',
  templateUrl: './inbound-add-form.component.html',
  styleUrls: ['./inbound-add-form.component.css']
})
export class InboundAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  inbound: InboundModel = { id: 0, whId: 0, custId: 0, brandId: 0, bizCode: '', goodsType: '', invoiceNo: '', isCiq: false };

  constructor(private basicDataService: BasicDataService,
    private inboundService: InboundService,
    private message: NzMessageService,
    private fb: FormBuilder) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initForm();
    this.getBasicDatas();
  }

  private initForm() {
    this.validateForm.addControl("ctrl_inbound_whId", new FormControl());
    this.validateForm.addControl("ctrl_inbound_custId", new FormControl());
    this.validateForm.addControl("ctrl_inbound_brandId", new FormControl());
    this.validateForm.addControl("ctrl_inbound_bizCode", new FormControl());
    this.validateForm.addControl("ctrl_inbound_goodsType", new FormControl());
    this.validateForm.addControl("ctrl_inbound_invoiceNo", new FormControl());
    this.validateForm.addControl("ctrl_inbound_isCiq", new FormControl());
  }

  handleOk(): void {
    this.inbound.whId = this.validateForm.controls["ctrl_inbound_whId"].value;
    this.inbound.whId = this.validateForm.controls["ctrl_inbound_whId"].value;
    this.inbound.custId = this.validateForm.controls["ctrl_inbound_custId"].value;
    this.inbound.brandId = this.validateForm.controls["ctrl_inbound_brandId"].value;
    this.inbound.bizCode = this.validateForm.controls["ctrl_inbound_bizCode"].value;
    this.inbound.goodsType = this.validateForm.controls["ctrl_inbound_goodsType"].value;
    this.inbound.invoiceNo = this.validateForm.controls["ctrl_inbound_invoiceNo"].value;
    this.inbound.isCiq = this.validateForm.controls["ctrl_inbound_isCiq"].value;

    this.setInbound(this.inbound);
  }

  setInbound(inbound: InboundModel): void {
    this.inboundService.setInbound(inbound)
      .subscribe(item => {
        this.doOK(true);
      });
  }

  doOK(flag: boolean): void {
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
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
    this.validateForm.controls["ctrl_inbound_brandId"].setValue(null);
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

}
