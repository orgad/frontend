import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { DnService } from '../../services/dn.service';

@Component({
  selector: 'app-dn-list',
  templateUrl: './dn-list.component.html',
  styleUrls: ['./dn-list.component.css']
})
export class DnListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];

  queryForm: FormGroup;
  isCollapse = true;
  isAddVisible = false;
  isEditVisible = false;

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

  dnId:number;

  dnList: DnModel[];

  constructor(private dnService: DnService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: NzMessageService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
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
    this.getList();
    this.resetStatus();
  }

  private getList(): void {
    this.dnService.getList(this.pageIndex - 1).subscribe(r => {
      this.dnList = r.data;
      this.total = r.totalCount;
      this.dnList.forEach(item => this.mapOfCheckedId[item.id] = false);
    });
  }

  currentPageDataChange($event: OutboundModel[]): void {
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
        this.dnId = item.id;
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

  doAdd(): void {
    //弹窗
    this.isAddVisible = true;
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
  }

  /*编辑开始 */
  doEdit(): void {
    //弹窗
    var ids = this.getCheckedIds();
    if (ids.length == 0 || ids == undefined) {
      this.messageService.warning("Please Select Any Dn.");
      return;
    }
    this.isEditVisible = true;
  }

  visibleChangeE(value): void {
    this.isEditVisible = value;
  }

  doImport(): void {
    //页面跳转
    var ids = this.getCheckedIds();
    if (ids.length == 0 || ids == undefined) {

      this.messageService.warning("Please Select Any Asn.");
      return;
    }

    this.router.navigateByUrl("main/out/dn/dnDetails/importdetail/" + ids[0]);
  }

  doCheck(): void {
    let ids = this.getCheckedIds();
    if (ids == null || ids == [] || ids.length == 0) {
      this.messageService.error("please select one id.");
      return;
    }

    this.dnService.affirm(ids).subscribe(
      r => {
        this.messageService.info(r.toString());
        this.getList();
      }
    );
  }
}
