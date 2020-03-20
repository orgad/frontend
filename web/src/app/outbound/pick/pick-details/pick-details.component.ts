import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { PickService } from '../../pick/pick.service';

@Component({
  selector: 'app-pick-details',
  templateUrl: './pick-details.component.html',
  styleUrls: ['./pick-details.component.css']
})
export class PickDetailsComponent implements OnInit {

  whs : BasicData[];
  headerForm: FormGroup;
  id:number;
  entity:PickingModel = {id: 0,code: "string",whId: 0,waveId: 0,
    outboundId: 0,store: 0,binQty: 0,cartonQty: 0,
    qty: 0,firstScanAt: null,lastScanAt: null,comment: "string",
    isCancel: false,isConfirm: false,printAt: null,
    createdBy: "string",createdTime: null,lastModifiedBy: "string",lastModifiedTime: null};
  detailList:PickingDetail[];

  constructor(private fb:FormBuilder,private messageService:NzMessageService, private route:ActivatedRoute,
    private pickService:PickService) {
    this.headerForm = this.fb.group(["headerForm"]);
   }

  ngOnInit() {
    this.initDetailsForm();
    this.id= this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh():void
  {
    this.getDetails();
  }

  initDetailsForm():void{
    this.headerForm.addControl("ctrl_whId",new FormControl());
    //this.headerForm.addControl("ctrl_code",new FormControl());
    //this.headerForm.addControl("ctrl_outbound_code",new FormControl());
  }

  getDetails(){
    
    this.pickService.getDetails(this.id).subscribe(r=>{
      this.entity = r.pick;
      this.detailList = r.detailList;
      this.messageService.info(r.toString());
    });
    
 }

}
