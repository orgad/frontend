import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RepService } from '../../services/rep.service';

@Component({
  selector: 'app-rep-list',
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.css']
})
export class RepListComponent implements OnInit {

  queryForm: FormGroup;
  isCollapse = true;

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: any = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  list: any[];

  isAddVisible = false;

  constructor(private fb: FormBuilder, private repService: RepService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  initQueryForm(): void {
    this.queryForm.addControl(`query.code`, new FormControl());
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  doSearch(): void {
    this.getList();
    this.resetStatus();
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

  doAdd():void
  {
    this.isAddVisible = true;
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

  private getCheckedIds(): Array<number> {
    let ids: number[] = [];

    for (let item of this.listOfDisplayData) {
      var r = this.mapOfCheckedId[item.id];
      if (r) {
        ids.push(item.id);
      }
    }
    return ids;
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  getList() {
    this.repService.getList().subscribe(r => {
      this.list = r.data;
      this.total = r.totalCount;
    }
    );
  }

}
