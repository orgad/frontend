import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PreQcService } from '../../services/pre-qc.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { QueryFormQcData } from '../../data/query-form-qc-data';

@Component({
  selector: 'app-pre-qc-list',
  templateUrl: './pre-qc-list.component.html',
  styleUrls: ['./pre-qc-list.component.css']
})
export class PreQcListComponent implements OnInit {

  /*查询组件*/
  loading = false;
  queryForm: FormGroup;
  isCollapse = true;
  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  qcId: number;
  qcList: PreQcModel[];

  /* 查询参数 */
  queryQc: QueryQc = {
    whId: 0, custId: 0, code: "", brandId: 0, batchNo: "", status: "", courier: "", trackingNo: "",
    bizCode: "", goodsType: ""
  };

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: PreQcModel[] = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  constructor(
    private preQcService: PreQcService,
    private basicDataService: BasicDataService,
    private messageService: NzMessageService,
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit(): void {
    this.initQueryForm();
    this.getBasicDatas();
    this.getList();
  }

  initQueryForm(): void {
    this.controlArray = QueryFormQcData;

    for (let i = 0; i < QueryFormQcData.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`queryQc.` + this.controlArray[i].id, new FormControl());
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

  private resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doSearch(): void {
    this.queryQc.whId = this.queryForm.controls["queryQc.whId"].value;
    this.queryQc.custId = this.queryForm.controls["queryQc.custId"].value;
    this.queryQc.brandId = this.queryForm.controls["queryQc.brandId"].value;
    this.queryQc.code = this.queryForm.controls["queryQc.code"].value;
    this.queryQc.status = this.queryForm.controls["queryQc.status"].value;
    this.queryQc.courier = this.queryForm.controls["queryQc.courier"].value;
    this.queryQc.trackingNo = this.queryForm.controls["queryQc.trackingNo"].value;
    this.queryQc.goodsType = this.queryForm.controls["queryQc.goodsType"].value;
    this.queryQc.bizCode = this.queryForm.controls["queryQc.bizCode"].value;
    this.getList();
    this.resetStatus();
  }

  private getQueryString(): string {
    let queryString = "";
    if (this.queryQc.whId != null) {
      queryString += "&whId=" + this.queryQc.whId;
    }
    if (this.queryQc.custId != null) {
      queryString += "&custId=" + this.queryQc.custId;
    }
    if (this.queryQc.brandId != null) {
      queryString += "&brandId=" + this.queryQc.brandId;
    }

    if (this.queryQc.bizCode != null) {
      queryString += "&bizCode=" + this.queryQc.bizCode;
    }

    if (this.queryQc.goodsType != null) {
      queryString += "&goodsType=" + this.queryQc.goodsType;
    }

    return queryString;
  }

  private getList(): void {
    this.loading = true;
    let queryString = this.getQueryString();
    //this.pageIndex - 1, queryString
    this.preQcService.getList()
      .subscribe(item => {
        this.loading = false;
        this.total = item.totalCount;
        this.qcList = item.data;
        this.translateData();
        this.qcList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        //this.messageService.info("get rn list : " + item.totalCount);
      });
  }

  private translateData(): void {
    this.translate.instant("status");
    for (let qc of this.qcList) {
      qc.status = this.translate.instant("status." + qc.status);
    }
  }

  currentPageDataChange($event: PreQcModel[]): void {
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

  private getCheckedIds(): Array<number> {
    let ids: number[] = [];

    for (let item of this.listOfDisplayData) {
      var r = this.mapOfCheckedId[item.id];
      if (r) {
        ids.push(item.id);
        this.qcId = item.id;
      }
    }
    return ids;
  }

  /*确认 */
  doCheck(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Rn.");
      return;
    }
    this.preQcService.confirm(ids).subscribe(
      result => {
        let msg = "";
        result.forEach(x => msg += x.item2 + "," + x.item1);
        this.messageService.info(msg);
        this.getList();
      }
    );
  }

  doScan():void{
    //页面跳转
    this.router.navigateByUrl("/main/return-in/qc/take");
  }
}
