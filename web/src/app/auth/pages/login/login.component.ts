import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import TokenUtil from 'src/app/utils/token.util';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService,
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
          console.log( this.tokenUtil.getToken());
          this.router.navigate(['main']);
        }
      }
    );
  }
}
