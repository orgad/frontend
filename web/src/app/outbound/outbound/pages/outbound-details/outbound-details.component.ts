import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OutboundService } from '../../services/outbound.service';
import { isShowSearchObject } from 'ng-zorro-antd';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-outbound-details',
  templateUrl: './outbound-details.component.html',
  styleUrls: ['./outbound-details.component.css']
})
export class OutboundDetailsComponent implements OnInit {

  whs : BasicData[];
  custs:BasicData[];
  brands:BasicData[];

  headerForm: FormGroup;
  outbound : Outbound = {
    id: 0,whId: 0,inboundId: 0,brandId: 0,brandRemark: "string",
    cartonQty: 0,code: "string",comment: "string",createdBy: "string",createdTime: null,
    custId: 0,dnId: 0,expectAt: null,
    expressNo: "string",handoverStatus: "string",
    isCancel: true,isConfirm: true,
    isPost: true,isPriority: true,
    lastModifiedBy: "string",
    lastModifiedTime: null,pickStatus: "string",qty: 0,
    refNo: "string",scanStatus: "string",status: "string",
    store: "string",transCode: "string",typeCode: "string",actualAt: null,
    detailDTOS:null
  };
  id:number;
  outboundList : OutboundDetail[];

  constructor(private fb:FormBuilder,private outboundService:OutboundService,
    private basicDataService:BasicDataService,
    private route:ActivatedRoute) {
    this.headerForm = this.fb.group(["headerForm"]);
   }

  ngOnInit() {
    this.initDetailsForm();
    this.id = this.route.snapshot.params["id"];
    this.getBasicDatas();
    this.getDetails();
  }

  initDetailsForm():void{
    this.headerForm.addControl("ctrl_whId",new FormControl());
    this.headerForm.addControl("ctrl_custId",new FormControl());
    this.headerForm.addControl("ctrl_brandId",new FormControl());
    this.headerForm.addControl("ctrl_code",new FormControl());
    this.headerForm.addControl("ctrl_batchNo",new FormControl());
    this.headerForm.addControl("ctrl_refNo",new FormControl());
    this.headerForm.addControl("ctrl_bizCode",new FormControl());
    this.headerForm.addControl("ctrl_goodsType",new FormControl());
    this.headerForm.addControl("ctrl_invoiceNo",new FormControl());
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

  doRefresh():void
  {
    this.getDetails();
  }

  private setOutbound():void
  {
    this.headerForm.get("ctrl_code").setValue(this.outbound.code);
    this.headerForm.controls["ctrl_whId"].setValue(this.outbound.whId.toString());
    this.headerForm.controls["ctrl_custId"].setValue(this.outbound.custId.toString());
    this.headerForm.controls["ctrl_brandId"].setValue(this.outbound.brandId.toString());
  }

  getDetails():void{
    this.outboundService.getDetails(this.id).subscribe(
      r=>{
         this.outbound = r.outbound;
         this.outboundList = r.detailList;
         this.setOutbound();
      }
    );
  }
}
