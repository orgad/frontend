import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { AdjService } from '../../services/adj.service';
import { UdcService } from 'src/app/outer/udc/udc.service';

@Component({
  selector: 'adj-add-form',
  templateUrl: './adj-add-form.component.html',
  styleUrls: ['./adj-add-form.component.css']
})
export class AdjAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  reasonCodes: UdcData[];

  listOfOption: [{ id: number, code: string, name: string }];
  adj: AdjAdd = {
    whId: 0, reasonCode:"", comment:""
  };

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService,
    private adjService: AdjService,private udcService:UdcService) {
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
    this.validateForm.addControl("adj.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("adj.reasonCode", new FormControl('', Validators.required));
    this.validateForm.addControl("adj.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
    this.reasonCodes = this.udcService.getAdjReason();
    console.log(this.reasonCodes);
  }

  handleOk(): void {
    //获取参数
    this.adj.whId = this.validateForm.controls["adj.whId"].value;
    this.adj.reasonCode = this.validateForm.controls["adj.reasonCode"].value;
    this.adj.comment = this.validateForm.controls["adj.comment"].value;

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
      this.setAdj(this.adj);
  }

  private setAdj(adj: AdjAdd): void {
    this.adjService.setAdj(adj)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }
}
