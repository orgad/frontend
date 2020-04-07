import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';
import { MoveService } from '../services/move.service';

@Component({
  selector: 'app-move-up-scan',
  templateUrl: './move-up-scan.component.html',
  styleUrls: ['./move-up-scan.component.css']
})
export class MoveUpScanComponent implements OnInit {

  scanForm: FormGroup;
  moveId: string;
  code: string;
  Message: string;
  SKUList: string;

  onFocus: object = {
    focus: false
  };

  constructor(private moveService: MoveService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
   
    this.moveId = this.route.snapshot.params["id"];
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


    this.moveService.saveDetail(this.moveId,"down", carton, binCode,barcode)
      .subscribe(r => {
        this.Message = barcode + ":" + r.message;
        if (r.allFinished) {
          this.toastService.info("移货下架完毕!");
        }
      });
  }

  done(): void {

  }

}
