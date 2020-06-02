import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavService } from '../../services/nav.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  queryForm: FormGroup;

  list: any;
  loading = false;

  isCollapse = true;

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: AsnModel[] = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder, private navService: NavService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  private initQueryForm() {
    this.queryForm.addControl("query.code", new FormControl(""));
  }

  doSearch(){
    this.getList();
  }

  getList() {
    this.navService.getList(this.pageIndex-1).subscribe(
      x => {
        this.total = x.totalCount;
        this.list = x.data;
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

}
