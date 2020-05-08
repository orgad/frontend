import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from 'ng-zorro-antd-mobile';
import { RcvService } from '../services/rcv.service';

@Component({
  selector: 'app-rcv-scan',
  templateUrl: './rcv-scan.component.html',
  styleUrls: ['./rcv-scan.component.css']
})
export class RcvScanComponent implements OnInit {

  scanForm: FormGroup;
  inboundId: string;
  code: string;
  Message: string;

  canEditable: boolean;
  codeFocus = { focus: true, date: new Date() };
  barcodeFocus = { focus: false,date:new Date() };

  bgColor: string = 'red';

  constructor(private rcvService: RcvService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
    this.buildForm();
    this.inboundId = this.route.snapshot.params["id"];
    this.code = this.route.snapshot.queryParams["code"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  onKeyDown(i: number) {
    if (i == 2)
      this.barcodeFocus = { focus: true, date: new Date() };
  }

  resetBarcode() {
    this.scanForm.controls["barcode"].setValue("");
  }

  doSave() {
    let carton = this.scanForm.controls["carton"].value;
    let barcode = this.scanForm.controls["barcode"].value;

    this.rcvService.saveInboudDetail(this.inboundId, carton, barcode).subscribe(r => {
      this.Message = barcode + ":" + r.message;
      this.resetBarcode();
      if (r.isAllFinished) {
        this.toastService.info(barcode + ":" + r.message);
      }
    });
  }

  onSubmit(): void {
    setTimeout(() => { this.doSave(); }, 100);
  }
}
