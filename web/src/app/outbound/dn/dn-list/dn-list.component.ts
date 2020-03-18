import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

import { DnService } from '../services/dn.service';
import { OutboundService } from '../../outbound/outbound.service';

@Component({
  selector: 'app-dn-list',
  templateUrl: './dn-list.component.html',
  styleUrls: ['./dn-list.component.css']
})
export class DnListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];

  queryForm: FormGroup;
  isCollapse = true;
  isVisible = false;

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

  dnList: DnModel[];

  constructor(private dnService: DnService,
    private outboundService: OutboundService,
    private fb: FormBuilder,
    private messageService: NzMessageService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
  }

  initQueryForm(): void {
    this.controlArray = [{ index: 0, id: "0", code: "status", show: true }];
    for (let i = 0; i < this.controlArray.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`query.` + this.controlArray[i].id, new FormControl());
    }
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  doSearch(): void {
    this.getList(this.pageIndex);
    this.resetStatus();
  }

  private getList(pageIndex: number): void {
    this.dnService.getList(pageIndex - 1).subscribe(r => {
      this.dnList = r.result.data;
      this.total = r.result.totalCount;
    });
  }

  currentPageDataChange($event: OutboundModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getList(this.pageIndex);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getList(this.pageIndex);
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

  }

  checkAll(value: boolean): void {

  }

  resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doAdd(): void {
    //弹窗
    this.isVisible = true;
  }

  visibleChange(value):void
  {
    this.isVisible = value;
  }

  doCheck(): void {
    let ids = this.getCheckedIds();
    if (ids == null || ids == [] || ids.length == 0) {
      this.messageService.error("please select one id.");
      return;
    }

    this.outboundService.set(ids).subscribe(
      r => {
        if (r.success) { this.resetStatus(); this.doSearch(); }
        this.messageService.info(r.success.toString());
        this.messageService.info(r.errorMsg);
      }
    );
  }
}
