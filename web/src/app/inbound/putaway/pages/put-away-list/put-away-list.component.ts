import { Component, OnInit } from '@angular/core';
import { PutAwayService } from '../../services/put-away.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-put-away-list',
  templateUrl: './put-away-list.component.html',
  styleUrls: ['./put-away-list.component.css']
})
export class PutAwayListComponent implements OnInit {

  ptList: PutAwayModel[];
  total: number;
  queryForm: FormGroup;
  listOfDisplayData: PutAwayModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  transCode="Inbound";

  constructor(
    private router:Router,
    private putAwayService: PutAwayService, private fb: FormBuilder,
    private messageService: NzMessageService,
    private translateService: TranslateService) { }

  ngOnInit() {
    this.queryForm = this.fb.group(["queryForm"]);
    this.queryForm.addControl("queryPt_code", new FormControl());

    const url = this.router.url;
    if (url.indexOf("return") >= 0)
      this.transCode = "ReturnIn";
    this.getList();
  }

  doSearch(): void {
    this.getList();
  }

  doRefresh(): void {
    this.getList();
  }

  getList(): void {
    this.putAwayService.getPutAwayList(this.transCode).subscribe(
      result => {
        this.ptList = result.data;
        this.total = result.totalCount;
        this.translateData();
        this.ptList.forEach(item => (this.mapOfCheckedId[item.id] = false));
      }
    );
  }

  private translateData(): void {
    this.translateService.instant("operateStatus");
    for (let pt of this.ptList) {
      pt.status = this.translateService.instant("operateStatus." + pt.status);
    }
  }

  currentPageDataChange($event: PutAwayModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
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

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  doAffirm(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.putAwayService.checks(ids).subscribe(
      result => {
        this.getList();
        this.messageService.info(result.toString());
      }
    );
  }
}
