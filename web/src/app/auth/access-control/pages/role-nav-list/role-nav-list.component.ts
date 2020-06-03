import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/auth/roles/services/role.service';
import { UserService } from 'src/app/auth/users/services/user.service';

@Component({
  selector: 'app-role-nav-list',
  templateUrl: './role-nav-list.component.html',
  styleUrls: ['./role-nav-list.component.css']
})
export class RoleNavListComponent implements OnInit {

  showForm: FormGroup;
  id: number;

  role: any = { code: "", name: "" };
  navList: any;
  userList: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private roleService: RoleService, private userService: UserService) {
    this.showForm = this.fb.group(["showForm"]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getNavList();
    this.getUserList();
  }

  doRefresh(){
    this.getNavList();
    this.getUserList();
  }

  getNavList() {
    this.roleService.getRoleNavList(this.id).subscribe(
      x => { this.navList = x; }
    );
  }

  getUserList() {
    this.userService.getUserList(this.id).subscribe(
      x => { this.userList = x; }
    );
  }

}
