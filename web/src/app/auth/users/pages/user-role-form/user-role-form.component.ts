import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RoleService } from 'src/app/auth/roles/services/role.service';
import { RightService } from 'src/app/auth/access-control/services/right.service';

@Component({
  selector: 'user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.css']
})
export class UserRoleFormComponent implements OnInit {

  list: TransferItem[] = [];
  disabled = false;
  showForm: FormGroup;
  user = { useName: "" }
  roleList: any;
  userRoleList: any;

  @Input() addRoleFormVisible: boolean;
  @Input() id: number;
  @Output() visibleChangeBack = new EventEmitter();

  constructor(private fb: FormBuilder,
    private roleService: RoleService, private rightService: RightService) {
    this.showForm = this.fb.group(["showForm"]);
  }

  ngOnInit(): void {
    
  }

  getList(){
    //获取全部的role-list
    this.getRoleList();
    //获取已经存在的user-role-list

  }

  getRoleList() {
    this.roleService.getList().subscribe(x => {
      this.roleList = x.data;
      this.getUserRoleList();
    });
  }

  getUserRoleList() {
    this.rightService.getRoleList(this.id).subscribe(x => {
      this.userRoleList = x;
      this.initData();
    });
  }

  initData() {
    this.roleList.forEach((idx: any) => {
      idx.title = idx.nameCn,
        idx.key = idx.id,
        idx.direction = this.get(idx.id)
    });
    this.list = this.roleList;
  }

  private get(key: any): string {
    let r = this.userRoleList.filter(x => x.id == key);
    if (r.length > 0)
      return 'right';
    else
      return 'left';
  }

  select(ret: {}): void {
    //console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    //console.log('nzChange', ret);
  }

  handleCancel() {
    this.visibleChangeBack.emit(false);
  }

  handleOk() {
    let roles = this.list.filter(x => x.direction == 'right');
    if (this.id > 0)
      this.rightService.createUserRole(this.id, roles).subscribe(
        x => this.doOk(x)
      );
    else
      console.log(this.id);
  }

  private doOk(x: string) {
    if (x.toString().toLowerCase() == "true") {
      this.visibleChangeBack.emit(false);
    }
  }
}
