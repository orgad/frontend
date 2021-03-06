import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { PickService } from '../services/pick.service';

@Component({
  selector: 'app-pick-scan',
  templateUrl: './pick-scan.component.html',
  styleUrls: ['./pick-scan.component.css']
})
export class PickScanComponent implements OnInit {

  scanForm: FormGroup;
  pickId: string;
  code: string;
  Message: string;
  SKUList: string;

  canEditable: boolean;

  autoFocus = { focus: true, date: new Date() };
  cartonFocus = { focus: false, date: new Date() };
  barcodeFocus = { focus: false, date: new Date() };
  binFocus = { focus: false, date: new Date() };

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  constructor(private pickService: PickService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {

    this.pickId = this.route.snapshot.params["id"];
    this.code = this.route.snapshot.queryParams["code"];
    this.buildForm();
    this.getAdvice();
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl(),
        advBinCode: new FormControl(),
        binCode: new FormControl(),
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  private getAdvice() {
    this.pickService.getAdvice(this.pickId).subscribe(
      r => {
        this.scanForm.controls["advBinCode"].setValue(r.binCode);
        let bars = "";

        r.barcodes.forEach(item => {
          bars += item + "<br>";
        });

        this.SKUList = bars;
      }
    );
  }

  resetBarcode() {
    this.scanForm.controls["barcode"].setValue("");
  }

  resetBinCode() {
    this.scanForm.controls["binCode"].setValue("");
  }

  onKeyDown(i: number) {
    /*光标跳转规则 */
    /* 货位条码 - 商品条码 */
    if (i == 2) this.binFocus = { focus: true, date: new Date() };
    if (i == 3) this.barcodeFocus = { focus: true, date: new Date() };
  }

  doSave() {
    let barcode = this.scanForm.controls["barcode"].value;
    let carton = this.scanForm.controls["carton"].value;
    let advBinCode = this.scanForm.controls["advBinCode"].value;
    let binCode = this.scanForm.controls["binCode"].value;

    this.pickService.saveDetail(this.pickId, barcode, carton, advBinCode, binCode)
      .subscribe(r => {
        this.Message = barcode + ":" + r.message;
        this.resetBarcode();

        if (r.allFinished) {
          this.toastService.info("拣货扫描完毕!");
        }
        else if (r.binFinished) {
          this.resetBinCode();
          this.getAdvice();
        }
      });
  }

  onSubmit(): void {
    setTimeout(() => { this.doSave() });
  }

  done(): void {

  }
}
