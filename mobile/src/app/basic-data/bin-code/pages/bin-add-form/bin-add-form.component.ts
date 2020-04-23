import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { Location } from '@angular/common';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'app-bin-add-form',
  templateUrl: './bin-add-form.component.html',
  styleUrls: ['./bin-add-form.component.css']
})
export class BinAddFormComponent implements OnInit {

  scanForm: FormGroup;
  Message: string;
  bin: BinModel = { code: "", whId: 1, zoneId: 2, zoneCode: "PCK01" };
  canEditable: boolean;
  barcodeFocus = { focus: true, date: new Date() };

  constructor(private binService: BinService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        code: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit(): void {
    let code = this.scanForm.controls["code"].value;
    this.bin.code = code;

    this.binService.setBin(this.bin)
      .subscribe(r => {
        this.Message = code + ":" + r;
      });
  }

}
