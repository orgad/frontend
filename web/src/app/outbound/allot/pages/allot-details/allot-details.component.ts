import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { AllotService } from '../../services/allot.service';

@Component({
  selector: 'app-allot-details',
  templateUrl: './allot-details.component.html',
  styleUrls: ['./allot-details.component.css']
})
export class AllotDetailsComponent implements OnInit {

  whs : BasicData[];
  headerForm: FormGroup;
  allot : AllotModel = {id:0,code:""};
  detailList:AllotDetail[];
  id:number;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private messageService:NzMessageService,
    private allotService:AllotService) {
    this.headerForm = fb.group(["headerForm"]);
   }

  ngOnInit() {
    this.initDetailsForm();
    this.id = this.route.snapshot.params["id"];
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

  doRefresh()
  {
    this.getDetails();
  }

  getDetails(){
     this.allotService.getDetails(this.id).subscribe(r=>{
       this.allot = r.alot,
       this.detailList = r.detailList;
       this.messageService.info(r.toString());
     });
  }

}
