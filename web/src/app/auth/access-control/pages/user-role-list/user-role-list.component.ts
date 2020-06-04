import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/auth/roles/services/role.service';
import { UserService } from 'src/app/auth/users/services/user.service';
import { RightService } from '../../services/right.service';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  styleUrls: ['./user-role-list.component.css']
})
export class UserRoleListComponent implements OnInit {

  showForm: FormGroup;
  id: number;

  user: any = { code: "", name: "" };
  bizList: any;
  roleList: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rightService:RightService) {
    this.showForm = this.fb.group(["showForm"]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.user.code = localStorage.getItem("userid");
    this.getBizList();
    this.getRoleList();
  }

  doRefresh(){
    this.getBizList();
    this.getRoleList();
  }

  getBizList() {
    this.rightService.getBizList(this.id).subscribe(
      x => { this.bizList = x; }
    );
  }

  getRoleList() {
    this.rightService.getRoleList(this.id).subscribe(
      y => { this.roleList = y; }
    );
  }
}
