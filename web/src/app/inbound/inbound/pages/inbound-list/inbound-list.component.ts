import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InboundService } from '../../services/inbound.service';
import { NzMessageService } from 'ng-zorro-antd';
import { QueryFormInboundData } from '../../request/query-form-inbound-data';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { Router } from '@angular/router';
import { PutAwayService } from 'src/app/inbound/putaway/services/put-away.service';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'inbound-list',
  templateUrl: './inbound-list.component.html',
  styleUrls: ['./inbound-list.component.css']
})

export class InboundListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  queryForm: FormGroup;
  queryInbound: QueryInbound = { whId: 10001, transCode: "", custId: 20001, code: "", brandId: 30001, batchNo: "", status: "None", rcvStatus: "", qcStatus: "", paStatus: "" };
  isVisible = false;
  isCollapse = true;
  loading = false;

  queryPrint: QueryPrint;

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

  transCode = "Inbound";

  constructor(private basicDataService: BasicDataService,
    private inboundService: InboundService,
    private ptService: PutAwayService,
    private printService: PrintService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private router: Router) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.controlArray = QueryFormInboundData;

    for (let i = 0; i < this.controlArray.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`queryInbound.` + this.controlArray[i].id, new FormControl());
    }
    this.getBasicDatas();

    const url = this.router.url;
    if (url.indexOf("return") >= 0)
      this.transCode = "ReturnIn";
    this.getList();
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
    this.getList();
  }

  currentPageDataChange($event: AsnModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  private getList(): void {
    this.loading = true;

    this.queryInbound.code = this.queryForm.controls["queryInbound.code"].value;
    this.queryInbound.batchNo = this.queryForm.controls["queryInbound.batchNo"].value;
    this.queryInbound.transCode = this.transCode;

    this.inboundService.getList(this.pageIndex - 1, this.queryInbound)
      .subscribe(item => {
        this.inboundList = item.data;
        this.total = item.totalCount;
        this.inboundList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        this.loading = false;
      });
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getList();
  }

  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getList();
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

  doRcv(): void {
    var ids = this.getCheckedIds();
    this.inboundService.checkInbounds(ids).subscribe(
      result => {
        this.message.info(ids + " rcv " + result.length);
        this.getList();
      }
    );
  }

  doQc(): void {
    var ids = this.getCheckedIds();
    this.inboundService.qcInbounds(ids).subscribe(
      result =>
        this.message.info(ids + " qc " + result.length)
    );
  }

  doPutAway(): void {
    var ids = this.getCheckedIds();
    this.inboundService.putawayInbounds(ids).subscribe(
      result =>
        this.message.info(ids + " putaway " + result.length)
    );
  }

  doPrint(): void {
    let ids = this.getCheckedIds();
    let printData: any;
    let datas: any;
    this.queryPrint = { whId: 10001, custId: 20001, brandId: 30001, typeCode: "PutAway", subTypeCode: "PutAway" };

    //获得打印数据源
    this.ptService.getPrintList(ids[0])
      .subscribe(x => {
        printData = x;
        this.printService.Print(printData, this.queryPrint);
      });
  }
}
