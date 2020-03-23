import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { RecheckService } from '../services/recheck.service';

@Component({
  selector: 'app-rechek-details',
  templateUrl: './rechek-details.component.html',
  styleUrls: ['./rechek-details.component.css']
})
export class RechekDetailsComponent implements OnInit {

  whs : BasicData[];
  headerForm: FormGroup;
  id:number;
  recheck:Recheck =  {    id: 0,
    code: "string",outboundId: 0,
    store: 0,qty: 0,cartonQty: 0,
    firstScanAt: null,lastScanAt: null,isCancel: false,
    isConfirm: false,comment: "string",
    createdBy: "string",createdTime: null,
    lastModifiedBy: "string",lastModifiedTime: null};
  detailList:RecheckDetail[];

  constructor(private fb:FormBuilder,private messageService:NzMessageService, private route:ActivatedRoute,
    private recheckService:RecheckService) {
    this.headerForm = this.fb.group(["headerForm"]);
   }

  ngOnInit() {
    this.initDetailsForm();
    this.id= this.route.snapshot.params["id"];
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
    this.headerForm.addControl("ctrl_isCiq",new FormControl());
  }

  doRefresh():void
  {
    this.getDetails();
  }

  getDetails(){
    this.recheckService.getDetails(this.id).subscribe(r=>{
      this.recheck = r.recheck;
      this.detailList = r.detailList;
      this.messageService.info(r.toString());
    }); 
  }

}
