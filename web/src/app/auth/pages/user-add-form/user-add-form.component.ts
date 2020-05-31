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

  user: User = { userName: "", password: "" };

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initForms();
  }

  private initForms():void {
    this.validateForm.addControl("user.userName", new FormControl('', Validators.required));
    this.validateForm.addControl("user.password", new FormControl('', Validators.required));
  }

  handleOk(): void {
    this.user.userName = this.validateForm.controls["user.userName"].value;
    this.user.password = this.validateForm.controls["user.password"].value;

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
