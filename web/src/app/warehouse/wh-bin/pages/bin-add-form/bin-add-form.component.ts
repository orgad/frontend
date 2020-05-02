import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'bin-add-form',
  templateUrl: './bin-add-form.component.html',
  styleUrls: ['./bin-add-form.component.css']
})
export class BinAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  zones: BasicData[];
  dutys: BasicData[];

  bin: BinModel = {
    id: 0, code: '', whId: 0, zoneId: 0, zoneCode: "", dutyId: 0, dutyCode: "", comment: "", typeCode: "", locateCode: "", sizeCode: ""
  }

  constructor(private fb: FormBuilder, private basicService: BasicDataService, private binService: BinService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("bin.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("bin.zoneId", new FormControl('', Validators.required));
    this.validateForm.addControl("bin.dutyId", new FormControl('', Validators.required));
    this.validateForm.addControl("bin.code", new FormControl('', Validators.required));
    this.validateForm.addControl("bin.typeCode", new FormControl());
    this.validateForm.addControl("bin.locateCode", new FormControl());
    this.validateForm.addControl("bin.sizeCode", new FormControl());
    this.validateForm.addControl("bin.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicService.getWhList().subscribe(r => this.whs = r.data);
    this.basicService.getZoneList().subscribe(r => this.zones = r.data);
    this.basicService.getDutyList().subscribe(r => this.dutys = r.data);
  }

  handleOk(): void {
    //获取参数
    this.bin.code = this.validateForm.controls["bin.code"].value;
    this.bin.typeCode = this.validateForm.controls["bin.typeCode"].value;
    this.bin.locateCode = this.validateForm.controls["bin.locateCode"].value;
    this.bin.sizeCode = this.validateForm.controls["bin.sizeCode"].value;

    this.bin.whId = this.validateForm.controls["bin.whId"].value;
    this.bin.zoneId = this.validateForm.controls["bin.zoneId"].value;

    let zone = this.zones.filter(x => x.id == this.bin.zoneId)[0];
    this.bin.zoneCode = zone.code;

    this.bin.dutyId = this.validateForm.controls["bin.dutyId"].value;
    let duty = this.dutys.filter(x => x.id == this.bin.zoneId)[0];
    this.bin.dutyCode = duty.code;

    this.bin.comment = this.validateForm.controls["bin.comment"].value;

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
      this.setBin(this.bin);
  }

  private setBin(bin: BinModel): void {
    this.binService.setBin(bin)
      .subscribe(item => {
        this.doOK(item != null);
      });
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

}
