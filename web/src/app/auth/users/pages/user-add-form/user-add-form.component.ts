import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;

  user: User = { userName: "", password: "",typeCode:"",nameCn:"",nameEn:"",comment:"" };

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initForms();
  }

  private initForms():void {
    this.validateForm.addControl("user.userName", new FormControl('', Validators.required));
    this.validateForm.addControl("user.password", new FormControl('', Validators.required));
    this.validateForm.addControl("user.typeCode", new FormControl('', Validators.required));
    this.validateForm.addControl("user.nameCn", new FormControl(''));
    this.validateForm.addControl("user.nameEn", new FormControl(''));
    this.validateForm.addControl("user.comment", new FormControl(''));
  }

  handleOk(): void {
    this.user.userName = this.validateForm.controls["user.userName"].value;
    this.user.password = this.validateForm.controls["user.password"].value;
    this.user.typeCode= this.validateForm.controls["user.typeCode"].value;
    this.user.nameCn = this.validateForm.controls["user.nameCn"].value;
    this.user.nameEn = this.validateForm.controls["user.nameEn"].value;
    this.user.comment = this.validateForm.controls["user.comment"].value;

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
      this.setUser(this.user);
  }

  private setUser(user: User): void {
    this.userService.setUser(user)
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
