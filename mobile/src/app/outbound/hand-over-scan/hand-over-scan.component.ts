import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { HandOverService } from '../services/hand-over.service';

@Component({
  selector: 'app-hand-over-scan',
  templateUrl: './hand-over-scan.component.html',
  styleUrls: ['./hand-over-scan.component.css']
})
export class HandOverScanComponent implements OnInit {

  scanForm: FormGroup;
  handId: string;
  Message:string;

  onFocus: object = {
    focus: false
  };

  constructor(private handOverService: HandOverService,
    private route: ActivatedRoute,
    private toastService:ToastService,
    private _location:Location) { }

  ngOnInit() {
    this.buildForm();
    this.handId = this.route.snapshot.params["id"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        courier: new FormControl(),
        expressCode: new FormControl()
      }
    );
  }

  goBack():void{
    this._location.back();
  }
   
  onSubmit(): void {
    let courier = this.scanForm.controls["courier"].value;
    let expressCode = this.scanForm.controls["expressCode"].value;
    this.handOverService.saveDetail(this.handId,courier,expressCode ).subscribe(r =>
      {
        this.Message = expressCode + ":" ; //+ r.message;
        /*
        if(r.isAllFinished)
        {
          this.toastService.info(barcode + ":" + r.message);
        }  
        */     
      });
  }

}
