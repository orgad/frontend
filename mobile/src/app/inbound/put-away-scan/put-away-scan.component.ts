import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PaService } from '../services/pa.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-put-away-scan',
  templateUrl: './put-away-scan.component.html',
  styleUrls: ['./put-away-scan.component.css']
})
export class PutAwayScanComponent implements OnInit {

  code: string;
  scanForm: FormGroup;
  inboundId: string;
  id: string;
  message: string;

  canEditable: boolean;
  autoFocus = { focus: true, date: new Date() };
  cartonFocus = { focus: false, date: new Date() };
  barcodeFocus = { focus: false, date: new Date() };
  binFocus = { focus: false, date: new Date() };

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  constructor(private paService: PaService, private _location: Location,
    private toastService: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildForm();
    this.id = this.route.snapshot.params["id"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl(),
        binCode: new FormControl()
      }
    );
  }

  resetBarcode() {
    this.scanForm.controls["barcode"].setValue("");
  }

  resetBinCode() {
    this.scanForm.controls["binCode"].setValue("");
  }

  goBack(): void {
    this._location.back();
  }

  onKeyDown(i: number) {
    if (i == 2) this.barcodeFocus = { focus: true, date: new Date() };

    if (i == 3) this.binFocus = { focus: true, date: new Date() };
  }

  doSave() {
    let carton = this.scanForm.controls["carton"].value;
    let barcode = this.scanForm.controls["barcode"].value;
    let binCode = this.scanForm.controls["binCode"].value;
    this.paService.saveDetail(this.id, carton, barcode, binCode).subscribe(r => {
      this.message =  r.message;
      
      this.resetBinCode();

      if (r.isFinished) {
        this.resetBarcode();
      }

      if (r.isAllFinished) {
        this.toastService.info(r.message);
      }
    }
    )
  }

  onSubmit(): void {
    setTimeout(() => {
      this.doSave();
    }, 100);
  }

  done(): void {

  }
}
