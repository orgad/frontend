import { Component, OnInit } from '@angular/core';
import { RnService } from 'src/app/return-in/rn/services/rn.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { BasicDataService } from 'src/app/outer/basic-data.service';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { QueryFormRnData } from '../../data/query-form-rn-data';

@Component({
  selector: 'app-rn-list',
  templateUrl: './rn-list.component.html',
  styleUrls: ['./rn-list.component.css']
})

export class RnListComponent implements OnInit {

  /*查询组件*/
  loading = false;
  queryForm: FormGroup;
  isCollapse = true;
  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  rnId: number;
  rnList: RnModel[];

  /* 查询参数 */
  queryRn: QueryRn = {
    whId: 0, custId: 0, code: "", brandId: 0, batchNo: "", status: "", pkgStatus: "", courier: "", trackingNo: "",
    bizCode: "", goodsType: ""
  };

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: AsnModel[] = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  constructor(
    private rnService: RnService,
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
    this.controlArray = QueryFormRnData;

    for (let i = 0; i < QueryFormRnData.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`queryRn.` + this.controlArray[i].id, new FormControl());
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

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

  visibleChangeE(value): void {
    this.isEditVisible = value;
    this.getList();
  }

  private resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doSearch(): void {
    this.queryRn.whId = this.queryForm.controls["queryRn.whId"].value;
    this.queryRn.custId = this.queryForm.controls["queryRn.custId"].value;
    this.queryRn.brandId = this.queryForm.controls["queryRn.brandId"].value;
    this.queryRn.code = this.queryForm.controls["queryRn.code"].value;
    this.queryRn.status = this.queryForm.controls["queryRn.status"].value;
    this.queryRn.pkgStatus = this.queryForm.controls["queryRn.pkgStatus"].value;
    this.queryRn.courier = this.queryForm.controls["queryRn.courier"].value;
    this.queryRn.trackingNo = this.queryForm.controls["queryRn.trackingNo"].value;
    this.queryRn.goodsType = this.queryForm.controls["queryRn.goodsType"].value;
    this.queryRn.bizCode = this.queryForm.controls["queryRn.bizCode"].value;
    this.getList();
    this.resetStatus();
  }

  private getQueryString(): string {
    let queryString = "";
    if (this.queryRn.whId != null) {
      queryString += "&whId=" + this.queryRn.whId;
    }
    if (this.queryRn.custId != null) {
      queryString += "&custId=" + this.queryRn.custId;
    }
    if (this.queryRn.brandId != null) {
      queryString += "&brandId=" + this.queryRn.brandId;
    }

    if (this.queryRn.bizCode != null) {
      queryString += "&bizCode=" + this.queryRn.bizCode;
    }

    if (this.queryRn.goodsType != null) {
      queryString += "&goodsType=" + this.queryRn.goodsType;
    }

    return queryString;
  }

  private getList(): void {
    this.loading = true;
    let queryString = this.getQueryString();
    this.rnService.getList(this.pageIndex - 1, queryString)
      .subscribe(item => {
        this.loading = false;
        this.total = item.totalCount;
        this.rnList = item.data;
        this.translateData();
        this.rnList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        //this.messageService.info("get rn list : " + item.totalCount);
      });
  }

  private translateData(): void {
    this.translate.instant("status");
    for (let rn of this.rnList) {
      rn.status = this.translate.instant("status." + rn.status);
    }

    this.translate.instant("operateStatus");
    for (let rn of this.rnList) {
      rn.pkgStatus = this.translate.instant("operateStatus." + rn.pkgStatus);
    }
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
        this.rnId = item.id;
      }
    }
    return ids;
  }

  /*到货确认 */
  doCheck(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Rn.");
      return;
    }
    this.rnService.affirmRn(ids).subscribe(
      result => {
        let msg = "";
        result.forEach(x => msg += x.item2 + "," + x.item1);
        this.messageService.info(msg);
        this.getList();
      }
    );
  }

  /*验货确认 */
  doAffirm(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Rn.");
      return;
    }
    this.rnService.checkRn(ids).subscribe(
      result => {
        console.log(result);
      });
  }

  /* 新增开始 */
  isAddVisible = false;
  doAdd(): void {
    //弹窗
    this.isAddVisible = true;
  }

  /*编辑开始 */
  isEditVisible = false;
  doEdit(): void {
    //弹窗
    var ids = this.getCheckedIds();
    if (ids.length == 0 || ids == undefined) {
      this.messageService.warning("Please Select Any Rn.");
      return;
    }
    this.isEditVisible = true;
  }

  doImport(): void {
    //页面跳转
    var ids = this.getCheckedIds();
    if (ids.length == 0 || ids == undefined) {
      this.messageService.warning("Please Select Any Rn.");
      return;
    }

    let id = ids[0];
    let idx = this.listOfDisplayData.findIndex(x => x.id == id);
    let code = this.listOfDisplayData[idx].code;
    this.router.navigateByUrl("in/rn/rnDetails/importdetail/" + ids[0] + "?code=" + code);
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

}
