import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';

import { BasicDataService } from 'src/app/outer/basic-data.service';
import { RnService } from '../services/rn.service';

@Component({
  selector: 'app-pkg-scan',
  templateUrl: './pkg-scan.component.html',
  styleUrls: ['./pkg-scan.component.css']
})
export class PkgScanComponent implements OnInit {

  scanForm: FormGroup;
  handId: string;
  Message: string;
  couriers: BasicData[];

  selectedStatus1 = { id: 0, code: "", name: "" };
  canEditable: boolean;
  autoFocus = { focus: false, date: new Date() };
  expressFocus = { focus: true, date: new Date() };

  constructor(private rnService: RnService,
    private basicData: BasicDataService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
    this.buildForm();
    this.getBasicData();
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  private getBasicData(): void {
    this.basicData.getCourierList().subscribe(x => {
      this.couriers = x.data;
      this.scanForm.controls["courier"].setValue(this.couriers[0].code);
      this.expressFocus = {focus: true,date: new Date()};
    }
    );
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

  onSubmit(): void {
    let courier = this.selectedStatus1.code;
    let expressCode = this.scanForm.controls["expressCode"].value;
    console.log(this.selectedStatus1, courier);

    this.rnService.saveDetail(courier, expressCode).subscribe(r => {
      this.Message = expressCode + ":" + r;
    });
  }
}
