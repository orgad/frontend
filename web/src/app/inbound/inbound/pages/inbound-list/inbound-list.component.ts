import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InboundService } from '../../services/inbound.service';
import { NzMessageService } from 'ng-zorro-antd';
import { QueryFormInboundData } from '../../request/query-form-inbound-data';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'inbound-list',
  templateUrl: './inbound-list.component.html',
  styleUrls: ['./inbound-list.component.css']
})

export class InboundListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  queryForm: FormGroup;
  queryInbound: QueryInbound = { whId: 10001, custId: 20001, code: "", brandId: 30001, batchNo: "", status: "None", rcvStatus: "", qcStatus: "", paStatus: "" };
  isVisible = false;
  isCollapse = true;
  loading = false;

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  inboundList: InboundModel[];

  listOfDisplayData: InboundModel[] = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;

  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  pageIndex: number = 1;
  pageSize: number = 20;
  total: number;

  constructor(private basicDataService: BasicDataService,
    private inboundService: InboundService,
    private message: NzMessageService,
    private fb: FormBuilder) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.controlArray = QueryFormInboundData;

    for (let i = 0; i < this.controlArray.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`queryInbound.` + this.controlArray[i].id, new FormControl());
    }
    this.getBasicDatas();
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  visibleChange(value): void {
    this.isVisible = value;
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
    this.basicDataService.getCustList().subscribe(
      result => {
        this.custs = result.data;
      }
    );
  }

  onChange(value: string) {
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  doQuery(): void {
    this.queryInbound.code = this.queryForm.controls["queryInbound.code"].value;
    this.queryInbound.batchNo = this.queryForm.controls["queryInbound.batchNo"].value;

    this.getList(this.pageIndex);
  }

  currentPageDataChange($event: AsnModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  private getList(pageIndex: number): void {
    this.loading = true;
    this.inboundService.getList(pageIndex - 1, this.queryInbound.whId, this.queryInbound.code, this.queryInbound.batchNo)
      .subscribe(item => {
        this.inboundList = item.data;
        this.total = item.totalCount;
        this.inboundList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        this.loading = false;
      });
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getList(this.pageIndex);
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getList(this.pageIndex);
  }

  doAdd(): void {
    //弹窗
    this.isVisible = true;
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

  doRcv(): void {
    var ids = this.getCheckedIds();
    this.inboundService.checkInbounds(ids).subscribe(
      result =>
        this.message.info(ids + " rcv " + result.inbound.code)
    );
  }

  doQc(): void {
    var ids = this.getCheckedIds();
    this.inboundService.qcInbounds(ids).subscribe(
      result =>
        this.message.info(ids + " qc " + result.inbound.code)
    );
  }

  doPutAway(): void {
    var ids = this.getCheckedIds();
    this.inboundService.putawayInbounds(ids).subscribe(
      result =>
        this.message.info(ids + " putaway " + result.inbound.code)
    );
  }


  refreshStatus(): void {

  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  operateData(): void {

  }

}
