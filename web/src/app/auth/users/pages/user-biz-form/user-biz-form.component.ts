import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RightService } from 'src/app/auth/access-control/services/right.service';
import { RoleService } from 'src/app/auth/roles/services/role.service';

@Component({
  selector: 'user-biz-form',
  templateUrl: './user-biz-form.component.html',
  styleUrls: ['./user-biz-form.component.css']
})
export class UserBizFormComponent implements OnInit {

  list: TransferItem[] = [];
  disabled = false;
  showForm: FormGroup;
  biz = { code: "",name:"" }
  bizList: any;
  userBizList: any;

  @Input() addBizFormVisible: boolean;
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
    this.roleService.getBizList().subscribe(x => {
      this.bizList = x.data;
      this.getUserRoleList();
    });
  }

  getUserRoleList() {
    this.rightService.getBizList(this.id).subscribe(x => {
      this.userBizList = x;
      this.initData();
    });
  }

  initData() {
    this.bizList.forEach((idx: any) => {
      idx.title = idx.code,
        idx.key = idx.id,
        idx.direction = this.get(idx.id)
    });
    this.list = this.bizList;
  }

  private get(key: any): string {
    let r = this.userBizList.filter(x => x.id == key);
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
    let bizs = this.list.filter(x => x.direction == 'right');
    if (this.id > 0)
      this.rightService.createUserBiz(this.id, bizs).subscribe(
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
