import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { HandOverService } from '../../services/hand-over.service';

@Component({
  selector: 'app-hand-over-list',
  templateUrl: './hand-over-list.component.html',
  styleUrls: ['./hand-over-list.component.css']
})
export class HandOverListComponent implements OnInit {

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

  list: HandOverModel[];

  constructor(private fb: FormBuilder,
    private messageService: NzMessageService,
    private handOverService: HandOverService, ) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
  }

  initQueryForm(): void {
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
    this.getList();
  }

  private getList():void{
    this.handOverService.getList(this.pageIndex - 1).subscribe(
      r => {
        this.list = r.data;
        this.total = r.totalCount;
        this.messageService.info(r.toString())
      }
    );
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

  doAdd(): void {
    //弹窗
    this.isVisible = true;
  }

  visibleChange(value):void
  {
    this.isVisible = value;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  refreshStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
    this.messageService.info("refresh");
  }

  doCheck(): void {
    let ids = this.getCheckedIds();
    this.handOverService.affirm(ids);
    this.refreshStatus();
  }
}
