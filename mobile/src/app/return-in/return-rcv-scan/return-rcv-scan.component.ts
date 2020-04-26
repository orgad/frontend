import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from 'ng-zorro-antd-mobile';
import { RcvService } from 'src/app/inbound/services/rcv.service';

@Component({
  selector: 'app-return-rcv-scan',
  templateUrl: './return-rcv-scan.component.html',
  styleUrls: ['./return-rcv-scan.component.css']
})
export class ReturnRcvScanComponent implements OnInit {

  scanForm: FormGroup;
  inboundId: string;
  Message: string;
  data = [{ name: "良品", value: "Good" }, { name: "不良品", value: "Damage" }];
  selectedStatus1 = { name: "良品", value: "Good" };

  canEditable: boolean;
  cartonFocus = { focus: true, date: new Date() };
  barcodeFocus = { focus: true, date: new Date() };

  constructor(private rcvService: RcvService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
    this.buildForm();
    this.inboundId = this.route.snapshot.params["id"];
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        qcCode: new FormControl(),
        carton: new FormControl(),
        barcode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    this.rcvService.saveInboudDetail(this.inboundId, null, barcode).subscribe(r => {
      this.Message = barcode + ":" + r.message;

      if (r.isAllFinished) {
        this.toastService.info(barcode + ":" + r.message);
      }
    });
  }

}
