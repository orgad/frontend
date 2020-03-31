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

  onFocus: object = {
    focus: false
  };

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
        console.log(r.binCode);
        this.scanForm.controls["advBinCode"].setValue(r.binCode);
        this.SKUList = r.barcodes;
      }
    );
  }

  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    let carton = this.scanForm.controls["carton"].value;
    let advBinCode = this.scanForm.controls["advBinCode"].value;
    let binCode = this.scanForm.controls["binCode"].value;


    this.pickService.saveDetail(this.pickId, barcode, carton, advBinCode, binCode)
      .subscribe(r => {
        this.Message = barcode + ":" + r.message;
        if (r.allFinished) {
          this.toastService.info("拣货扫描完毕!");
        }
        else if (r.binFinished) {
          this.getAdvice();
        }
      });
  }

  done(): void {

  }
}
