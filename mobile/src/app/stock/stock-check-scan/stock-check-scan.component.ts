import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';
import { StockCheckService } from '../services/stock-check.service';

@Component({
  selector: 'app-stock-check-scan',
  templateUrl: './stock-check-scan.component.html',
  styleUrls: ['./stock-check-scan.component.css']
})
export class StockCheckScanComponent implements OnInit {

  scanForm: FormGroup;
  checkId: string;
  code: string;
  Message: string;
  SKUList: string;

  onFocus: object = {
    focus: false
  };

  constructor(private stockCheckService: StockCheckService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
   
    this.checkId = this.route.snapshot.params["id"];
    this.code = this.route.snapshot.queryParams["code"];
    this.buildForm();
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl(),
        binCode: new FormControl(),
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    let carton = this.scanForm.controls["carton"].value;
    let binCode = this.scanForm.controls["binCode"].value;


    this.stockCheckService.saveDetail(this.checkId, carton, binCode,barcode)
      .subscribe(r => {
        this.Message = barcode + ":" + r.message;
        if (r.allFinished) {
          this.toastService.info("盘点扫描完毕!");
        }
      });
  }

  done(): void {

  }

}
