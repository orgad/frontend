import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { HandOverService } from '../../services/hand-over.service';

@Component({
  selector: 'app-hand-over-details',
  templateUrl: './hand-over-details.component.html',
  styleUrls: ['./hand-over-details.component.css']
})
export class HandOverDetailsComponent implements OnInit {

  whs : BasicData[];
  headerForm: FormGroup;
  id:number;
  handOver:HandOver = {id: 0,code: "",store: 0,whId:0,custId:0,
    qty: 0,cartonQty: 0,firstScanAt: null,lastScanAt: null,
    isCancel: false,isConfirm: false,comment: "",
    createdBy: "",createdTime: null,lastModifiedBy: "",lastModifiedTime: null};
  handOverDetails:HandOverDetail[];

  constructor(private fb:FormBuilder,private messageService:NzMessageService, private route:ActivatedRoute,
    private handOverService:HandOverService) {
    this.headerForm = this.fb.group(["headerForm"]);
   }

  ngOnInit() {
    this.initDetailsForm();
    this.id= this.route.snapshot.params["id"];
    this.getDetails();
  }

  private initDetailsForm():void{
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

  private getDetails(){
    this.handOverService.getDetails(this.id).subscribe(r=>{
      this.handOver = r.handover,
      this.handOverDetails = r.detailList;
      this.messageService.info(r.toString());
    }); 
  }
}
