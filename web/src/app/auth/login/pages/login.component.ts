import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import TokenUtil from 'src/app/utils/token.util';
import { NzMessageService } from 'ng-zorro-antd';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private message:NzMessageService,
    private router: Router,
    private tokenUtil: TokenUtil) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    var uid = this.validateForm.controls["userName"].value;
    var pwd = this.validateForm.controls["password"].value;

    this.loginService.LogIn(uid, pwd).subscribe(
      r => {
        if (r.stateCode > 0) {
          this.tokenUtil.setToken(r.accessToken);
          //记录登录信息
          localStorage.setItem("userid",uid);
          this.router.navigate(['main']);
        }
        else
        {
          this.message.error("login failed!");
        }
      }
    );
  }
}
