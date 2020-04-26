import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { HandOverService } from '../services/hand-over.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-hand-over-scan',
  templateUrl: './hand-over-scan.component.html',
  styleUrls: ['./hand-over-scan.component.css']
})
export class HandOverScanComponent implements OnInit {

  scanForm: FormGroup;
  handId: string;
  Message: string;
  couriers: BasicData[];

  selectedStatus1 = { id: 0, code: "", name: "" };

  canEditable: boolean;
  autoFocus = { focus: true, date: new Date() };

  constructor(private handOverService: HandOverService,
    private basicData: BasicDataService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
    this.buildForm();
    this.handId = this.route.snapshot.params["id"];
    this.getBasicData();
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  private getBasicData(): void {
    this.basicData.getCourierList().subscribe(x => this.couriers = x.data);
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        courier: new FormControl(),
        expressCode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onChange(value) {

  }

  resetCode() {
    this.scanForm.controls["expressCode"].setValue("");
  }

  doSave() {
    let courier = this.selectedStatus1.code;
    let expressCode = this.scanForm.controls["expressCode"].value;

    this.resetCode();

    this.handOverService.saveDetail(this.handId, courier, expressCode).subscribe(r => {
      this.Message = expressCode + ":" + r;
    });
  }

  onSubmit(): void {
    setTimeout(() => { this.doSave() }, 100);
  }
}
