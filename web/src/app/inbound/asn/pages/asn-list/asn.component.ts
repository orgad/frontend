import { Component } from '@angular/core';
import { AsnService } from 'src/app/inbound/asn/services/asn.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { QueryFormAsnData } from '../../request/query-form-asn-data';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-asn',
  templateUrl: './asn.component.html',
  styleUrls: ['./asn.component.css']
})
export class AsnComponent {

  /*查询组件*/
  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  loading = false;
  queryForm: FormGroup;
  isCollapse = true;

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  asnId: number;

  /* 查询参数 */
  queryAsn: QueryAsn = {
    whId: 0, custId: 0, asnCode: "", brandId: 0, batchNo: "", asnStatus: "", checkStatus: "", isCiq: null,
    bizCode: "", goodsType: "", invoiceNo: ""
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
  asnList: AsnModel[];

  constructor(
    private asnService: AsnService,
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
    this.getAsnList();
  }

  initQueryForm(): void {
    this.controlArray = QueryFormAsnData;

    for (let i = 0; i < QueryFormAsnData.length; i++) {
      this.controlArray[i].show = i < 6;
      this.queryForm.addControl(`queryAsn.` + this.controlArray[i].id, new FormControl());
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
    this.getAsnList();
  }

  visibleChangeE(value): void {
    this.isEditVisible = value;
    this.getAsnList();
  }

  private resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doSearch(): void {
    this.queryAsn.whId = this.queryForm.controls["queryAsn.whId"].value;
    this.queryAsn.custId = this.queryForm.controls["queryAsn.custId"].value;
    this.queryAsn.brandId = this.queryForm.controls["queryAsn.brandId"].value;
    this.queryAsn.asnCode = this.queryForm.controls["queryAsn.asnCode"].value;
    this.queryAsn.asnStatus = this.queryForm.controls["queryAsn.asnStatus"].value;
    this.queryAsn.checkStatus = this.queryForm.controls["queryAsn.checkStatus"].value;
    this.queryAsn.isCiq = this.queryForm.controls["queryAsn.isCiq"].value;
    this.queryAsn.goodsType = this.queryForm.controls["queryAsn.goodsType"].value;
    this.queryAsn.bizCode = this.queryForm.controls["queryAsn.bizCode"].value;
    this.getAsnList();
    this.resetStatus();
  }

  private getQueryString(): string {
    let queryString = "";
    if (this.queryAsn.whId != null) {
      queryString += "&whId=" + this.queryAsn.whId;
    }
    if (this.queryAsn.custId != null) {
      queryString += "&custId=" + this.queryAsn.custId;
    }
    if (this.queryAsn.brandId != null) {
      queryString += "&brandId=" + this.queryAsn.brandId;
    }

    if (this.queryAsn.asnCode != null) {
      queryString += "&asnCode=" + this.queryAsn.asnCode;
    }

    if (this.queryAsn.asnStatus != null) {
      queryString += "&status=" + this.queryAsn.asnStatus;
    }

    if (this.queryAsn.checkStatus != null) {
      queryString += "&checkStatus=" + this.queryAsn.checkStatus;
    }

    if (this.queryAsn.isCiq != null) {
      queryString += "&isCiq=" + this.queryAsn.isCiq;
    }

    if (this.queryAsn.bizCode != null) {
      queryString += "&bizCode=" + this.queryAsn.bizCode;
    }

    if (this.queryAsn.goodsType != null) {
      queryString += "&goodsType=" + this.queryAsn.goodsType;
    }

    return queryString;
  }

  private getAsnList(): void {
    this.loading = true;
    let queryString = this.getQueryString();
    this.asnService.getAsnList(this.pageIndex - 1, queryString)
      .subscribe(item => {
        this.loading = false;
        this.total = item.totalCount;
        this.asnList = item.data;
        this.translateData();
        this.asnList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        //this.messageService.info("get asn list : " + item.totalCount);
      });
  }

  private translateData(): void {
    this.translate.instant("status");
    for (let asn of this.asnList) {
      asn.status = this.translate.instant("status." + asn.status);
    }

    this.translate.instant("operateStatus");
    for (let asn of this.asnList) {
      asn.checkStatus = this.translate.instant("operateStatus." + asn.checkStatus);
    }
  }

  currentPageDataChange($event: AsnModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getAsnList();
  }

  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getAsnList();
  }

  private getCheckedIds(): Array<number> {
    let ids: number[] = [];

    for (let item of this.listOfDisplayData) {
      var r = this.mapOfCheckedId[item.id];
      if (r) {
        ids.push(item.id);
        this.asnId = item.id;
      }
    }
    return ids;
  }

  /*到货确认 */
  doCheck(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.asnService.affirmAsn(ids).subscribe(
      result => {
        let msg = "";
        result.forEach(x => msg += x.item2 + "," + x.item1);
        this.messageService.info(msg);
        this.getAsnList();
      }
    );
  }

  /*验货确认 */
  doAffirm(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.asnService.checkAsn(ids).subscribe(
      result => {

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
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.isEditVisible = true;
  }

  doImport(): void {
    //页面跳转
    var ids = this.getCheckedIds();
    if (ids.length == 0 || ids == undefined) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }

    let id = ids[0];
    let idx = this.listOfDisplayData.findIndex(x=>x.id==id);
    let code = this.listOfDisplayData[idx].code;
    this.router.navigateByUrl("in/asn/asnDetails/importdetail/" + ids[0] + "?code=" + code);
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
