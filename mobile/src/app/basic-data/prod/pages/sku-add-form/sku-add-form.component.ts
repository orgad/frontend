import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { Location } from '@angular/common';

import { SkuService } from '../../services/sku.service';

@Component({
  selector: 'sku-add-form',
  templateUrl: './sku-add-form.component.html',
  styleUrls: ['./sku-add-form.component.css']
})
export class SkuAddFormComponent implements OnInit {

  scanForm: FormGroup;
  Message: string;
  sku: SkuModel = { barcode: "" };
  canEditable: boolean;
  barcodeFocus = { focus: false, date: new Date() };

  constructor(private skuService: SkuService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) {

  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  ngOnInit() {
    this.buildForm();
    this.barcodeFocus = { focus: true, date: new Date() };
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        barcode: new FormControl("")
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  resetCode() {
    this.scanForm.controls["barcode"].setValue("");
  }

  doSave()
  {
    let barcode = this.scanForm.controls["barcode"].value;
   
    this.sku.barcode = barcode;
    this.skuService.setSku(this.sku)
      .subscribe(r => {
        this.Message = barcode + ":" + r;
        this.resetCode();
      });
  }

  onSubmit(): void {
    setTimeout(()=>{this.doSave()},100);
  }
}
