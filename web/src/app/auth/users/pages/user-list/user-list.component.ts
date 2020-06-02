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
  isAddVisible: boolean;
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

  private resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
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

  doAdd() {
    this.isAddVisible = true;
  }



}
