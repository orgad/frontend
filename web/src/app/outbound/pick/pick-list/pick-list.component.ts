import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzMessageService, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd';
import { PickService } from '../../pick/pick.service';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];

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
  list: PickingModel[];

  constructor(private fb: FormBuilder, private messageService: NzMessageService,
    private pickService: PickService, private printService: PrintService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
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
    this.resetStatus();
  }

  getList() {
    this.pickService.getList(this.pageIndex - 1, 0).subscribe(
      item => {
        this.list = item.data;
        this.total = item.totalCount;
        this.list.forEach(item => this.mapOfCheckedId[item.id] = false);
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

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doPrint(): void {
    let ids = this.getCheckedIds();
    let printData: any;
    let datas: any;
    let queryPrint: QueryPrint;
    queryPrint = { whId: 10001, custId: 20001, brandId: 30001, typeCode: "Picking", subTypeCode: "Picking" };

    //获得打印数据源
    this.pickService.getPrint(ids[0])
      .subscribe(x => {
        printData = x;
        this.printService.Print(printData, queryPrint);
      });
  }

  doCheck(): void {
    let ids = this.getCheckedIds();
    this.pickService.affirm(ids).subscribe(r => {
      this.getList();
    });
  }
}
