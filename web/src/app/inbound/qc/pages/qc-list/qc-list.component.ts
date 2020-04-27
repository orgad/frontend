import { Component, OnInit } from '@angular/core';
import { QcService } from '../../services/qc.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-qc-list',
  templateUrl: './qc-list.component.html',
  styleUrls: ['./qc-list.component.css']
})
export class QcListComponent implements OnInit {

  qcList: QcModel[];
  total: number;

  listOfDisplayData: QcModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  queryForm: FormGroup;
  queryQc: any;

  constructor(private qcService: QcService, private fb: FormBuilder,
    private messageService: NzMessageService,
    private translateService: TranslateService) {

  }

  ngOnInit() {
    this.queryForm = this.fb.group(["queryForm"]);
    this.queryForm.addControl("queryQc_code", new FormControl());
    this.getQcList();
  }

  doSearch(): void {
    this.getQcList();
  }

  getQcList(): void {
    this.qcService.getQcList().subscribe(
      result => {
        this.qcList = result.data;
        this.total = result.totalCount;
        this.translateData();
        this.qcList.forEach(item => (this.mapOfCheckedId[item.id] = false));
      }
    );
  }

  private translateData(): void {
    this.translateService.instant("operateStatus");
    for (let qc of this.qcList) {
      qc.status = this.translateService.instant("operateStatus." + qc.status);
    }
  }

  currentPageDataChange($event: QcModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
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

  doAffirm(): void {
    var ids = this.getCheckedIds();
    if (ids == null || ids.length == 0) {
      this.messageService.warning("Please Select Any Asn.");
      return;
    }
    this.qcService.checks(ids).subscribe(
      result => {
        this.getQcList();
        this.messageService.info(result.toString());
      }
    );
  }

}
