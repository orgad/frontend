import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FreezeService } from '../../services/freeze.service';

@Component({
  selector: 'app-freeze-list',
  templateUrl: './freeze-list.component.html',
  styleUrls: ['./freeze-list.component.css']
})
export class FreezeListComponent implements OnInit {

  queryForm: FormGroup;
  list: FreezeModel[];
  
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

  isAddVisible = false;
  
  constructor(private fb: FormBuilder,
    private freezeService: FreezeService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.getList();
  }

  doQuery()
  {
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

  private getList() {
    this.freezeService.getList().subscribe(
      r => {
        this.list = r.data;
        this.total = r.totalCount;
      }
    );
  }
}
