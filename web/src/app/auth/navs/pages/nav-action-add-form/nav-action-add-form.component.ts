import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'nav-action-add-form',
  templateUrl: './nav-action-add-form.component.html',
  styleUrls: ['./nav-action-add-form.component.css']
})
export class NavActionAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Input() id: number;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  action: any = { navId: 0, navCode: "", code: "", name: "", seq: 0 };
  
  constructor(private fb: FormBuilder, private navService: NavService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initFrom();
  }

  initFrom() {
    this.validateForm.addControl("action.code", new FormControl('', Validators.required));
    this.validateForm.addControl("action.name", new FormControl('', Validators.required));
    this.validateForm.addControl("action.seq", new FormControl('', Validators.required));
  }

  handleOk(): void {
    this.action.navId = this.id;
    console.log(this.id);
    this.action.navCode = "";
    this.action.code = this.validateForm.controls["action.code"].value;
    this.action.name = this.validateForm.controls["action.name"].value;
    this.action.seq = this.validateForm.controls["action.seq"].value;

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
      this.setAction(this.action);
  }

  private setAction(action: any): void {
    this.navService.setAction(this.id, action)
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
