import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'nav-add-form',
  templateUrl: './nav-add-form.component.html',
  styleUrls: ['./nav-add-form.component.css']
})
export class NavAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  nav: any = { clientNo: "", pId: 0, pCode: "", code: "", nameCn: "", nameEn: "", seq: 0, allPath: "" }
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private navService: NavService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initFrom();
  }

  initFrom() {
    this.validateForm.addControl("nav.clientNo", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.pId", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.pCode", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.code", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.nameCn", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.nameEn", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.seq", new FormControl('', Validators.required));
    this.validateForm.addControl("nav.allPath", new FormControl('', Validators.required));
  }

  handleOk(): void {

    this.nav.clientNo = this.validateForm.controls["nav.clientNo"].value;
    this.nav.pId = this.validateForm.controls["nav.pId"].value;
    this.nav.pCode = this.validateForm.controls["nav.pCode"].value;
    this.nav.code = this.validateForm.controls["nav.code"].value;
    this.nav.nameCn = this.validateForm.controls["nav.nameCn"].value;
    this.nav.nameEn = this.validateForm.controls["nav.nameEn"].value;
    this.nav.seq = this.validateForm.controls["nav.seq"].value;
    this.nav.allPath = this.validateForm.controls["nav.allPath"].value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a != "VALID") {
        checkStatus = false;
      }
    }

    if (checkStatus == true)
      this.setNav(this.nav);
  }

  private setNav(nav: any): void {
    this.navService.setNav(this.nav)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  doOK(flag: boolean): void {
    this.resetForm();
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }

}
