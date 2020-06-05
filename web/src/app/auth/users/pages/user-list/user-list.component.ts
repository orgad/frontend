import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  queryForm: FormGroup;
  
  isAddVisible: boolean;//用户
  isAddRoleVisible:boolean; //角色
  isAddBizVisible:boolean;//业务数据

  list: any;
  total: number;
  loading = false;
  userId:number;
  isCollapse = true;

  /*分页用 */
  pageIndex = 1;
  pageSize = 20;

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: AsnModel[] = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initForm();
    this.getList();
  }

  private initForm(){
    this.queryForm.addControl("query.code",new FormControl(""));
  }

  doSearch() {
    this.getList();
  }

  private getList() {
    this.userService.getList(this.pageIndex-1).subscribe(
      x => {
        this.list = x.data;
        this.total = x.totalCount;
      }
    );
  }

  refreshStatus() {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  currentPageDataChange($event: AsnModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getList();
  }

  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getList();
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

  visibleChangeC(value): void {
    this.isAddRoleVisible = value;
    this.getList();
  }

  visibleChangeD(value): void {
    this.isAddBizVisible = value;
    this.getList();
  }

  doAdd() {
    this.isAddVisible = true;
  }

  private getCheckedIds(): Array<number> {
    let ids: number[] = [];

    for (let item of this.listOfDisplayData) {
      var r = this.mapOfCheckedId[item.id];
      if (r) {
        ids.push(item.id);
        this.userId = item.id;
      }
    }
    return ids;
  }

  doRight(){
    /*给用户指定业务权限 */
    this.userId = this.getCheckedIds()[0];
    /*给用户指定角色权限 */
    this.isAddRoleVisible = true;
  }

  doBiz(){
    /*给用户指定业务权限 */
    this.userId = this.getCheckedIds()[0];
    /*给用户指定角色权限 */
    this.isAddBizVisible = true;
  }

}
