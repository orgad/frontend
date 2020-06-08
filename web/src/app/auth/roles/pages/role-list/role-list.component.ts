import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { NavService } from 'src/app/auth/navs/services/nav.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css','./../../../../css/list-component.css']
})
export class RoleListComponent implements OnInit {

  queryForm: FormGroup;
  isAddVisible: boolean;
  isAddNavVisible:boolean;

  list: any;
  total: number;
  loading = false;
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

  roleId:number;

  constructor(private fb: FormBuilder, private roleService: RoleService) {
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
    this.roleService.getList().subscribe(
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

  visibleChangeB(value): void {
    this.isAddNavVisible = value;
  }

  private getCheckedIds(): Array<number> {
    let ids: number[] = [];

    for (let item of this.listOfDisplayData) {
      var r = this.mapOfCheckedId[item.id];
      if (r) {
        ids.push(item.id);
        this.roleId = item.id;
      }
    }
    return ids;
  }

  doAdd() {
    this.isAddVisible = true;
  }

  doNav() {
    this.getCheckedIds();
    this.isAddNavVisible = true;
  }
}
