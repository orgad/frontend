import { Component, OnInit } from '@angular/core';
import { OptLogService } from '../../services/opt-log.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'opt-log-list',
  templateUrl: './opt-log-list.component.html',
  styleUrls: ['./opt-log-list.component.css']
})
export class OptLogListComponent implements OnInit {

  optLogList: OptLogModel[];
  total: number;
  pageIndex: number = 1;
  pageSize: number = 20;
  listOfDisplayData: QcModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  queryForm: FormGroup;
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  constructor(private optLogService: OptLogService, private fb: FormBuilder) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getRcvList();
  }

  initQueryForm(): void {
    this.queryForm.addControl(`query.code`, new FormControl());
  }

  doSearch(): void {
    this.getRcvList();
  }

  private getRcvList(): void {
    var code = this.queryForm.controls["query.InboundCode"].value;
    this.optLogService.getList(code, this.pageIndex - 1).subscribe(
      result => {
        this.optLogList = result.data;
        this.total = result.totalCount;
        console.log(result);
      }
    );
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id] == value);
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  currentPageDataChange($event: QcModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getRcvList();
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getRcvList();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }
}
