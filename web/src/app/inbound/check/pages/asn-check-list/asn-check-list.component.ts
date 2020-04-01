import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AsnCheckService } from '../../services/asn-check.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-asn-check-list',
  templateUrl: './asn-check-list.component.html',
  styleUrls: ['./asn-check-list.component.css']
})
export class AsnCheckListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  queryForm: FormGroup;
  isCollapse = true;
  asnCheckList: AsnCheckModel[];
  loading = false;
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: AsnModel[] = [];

  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  total: number;
  pageSize: number = 20;
  pageIndex: number = 1;

  constructor(private asnCheckService: AsnCheckService,
    private messageService: NzMessageService,
    private fb: FormBuilder,
    private translate: TranslateService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  initQueryForm(): void {
    this.controlArray.push({ index: 0, code: 'checkcode', id: 'checkCode', show: false });
    this.controlArray.push({ index: 1, code: 'asnCode', id: 'asnCode', show: false });

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
    this.getList();
  }

  currentPageDataChange($event: AsnModel[]): void {
    this.listOfDisplayData = $event;
  }

  private getList() {
    let code = this.queryForm.controls["query.asnCode"].value;
    this.loading = true;
    this.asnCheckService.getList(this.pageIndex - 1, code)
      .subscribe(result => {
        this.asnCheckList = result.data;
        this.total = result.totalCount;
        this.asnCheckList.forEach(item => (this.mapOfCheckedId[item.id] = false));
        this.translateData();
        this.loading = false;
      });
  }

  private translateData(): void {
    this.translate.instant("operateStatus");
    for (let asnCheck of this.asnCheckList) {
      asnCheck.status = this.translate.instant("operateStatus." + asnCheck.status);
    }
  }

  changePageIndex(pageIndex) {
    this.pageIndex = pageIndex;
    this.getList();
  }

  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getList();
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
      }
    }
    return ids;
  }

  doAffirm(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.asnCheckService.checks(ids).subscribe(
      result => {
        this.getList();
        this.messageService.info(result.toString());
      }
    );
  }

}
