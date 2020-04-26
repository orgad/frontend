import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { Location } from '@angular/common';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'app-bin-add-form',
  templateUrl: './bin-add-form.component.html',
  styleUrls: ['./bin-add-form.component.css']
})

export class BinAddFormComponent implements AfterViewInit {

  scanForm: FormGroup;
  Message: string;
  bin: BinModel = { code: "", whId: 1, zoneId: 2, zoneCode: "PCK01" };
  canEditable: boolean;
  barcodeFocus = { focus: true, date: new Date() };

  @ViewChild("codeElement", { static: false }) codeElement: ElementRef;

  constructor(private binService: BinService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) {
  }

  ngOnInit() {
    this.buildForm();
    this.barcodeFocus = { focus: true, date: new Date() };
  }

  ngAfterViewInit() {
    this.barcodeFocus = { focus: true, date: new Date() };
  }

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 100);
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        "code": new FormControl('', Validators.required)
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  resetCode() {
    this.scanForm.controls["code"].setValue("");
  }

  selectText() {
    //测试未通过
    //setTimeout(() => { this.codeElement.nativeElement.selectText() }, 100);
  }

  private doSave() {
    let code = this.scanForm.controls["code"].value;

    this.bin.code = code;

    this.binService.setBin(this.bin)
      .subscribe(r => {

        this.Message = code + ":" + r;
        this.resetCode();
        this.barcodeFocus = { focus: true, date: new Date() };

      }
      );
  }

  onSubmit(): void {
    setTimeout(() => this.doSave(), 100);
  }

}
