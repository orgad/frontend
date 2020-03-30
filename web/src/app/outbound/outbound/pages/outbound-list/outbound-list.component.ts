import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { OutboundService } from '../../services/outbound.service';
import { RecheckService } from 'src/app/outbound/recheck/services/recheck.service';
import { HandOverService } from 'src/app/outbound/hand-over/services/hand-over.service';

@Component({
  selector: 'app-outbound-list',
  templateUrl: './outbound-list.component.html',
  styleUrls: ['./outbound-list.component.css']
})
export class OutboundListComponent implements OnInit {

  controlArray: Array<{ index: number, id: string, code: string, show: boolean }> = [];
  loading:false;
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

  outboundList: OutboundModel[];

  constructor(private fb: FormBuilder, private outboundService: OutboundService,
    private recheckService: RecheckService, private handOverService: HandOverService,
    private messageService: NzMessageService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  private initQueryForm(): void {
    this.queryForm.addControl("query.code",new FormControl(""));
    this.queryForm.addControl("query.dnCode",new FormControl(""));
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

  private getList() {
    this.outboundService.getList(this.pageIndex - 1).subscribe(
      r => {
        this.outboundList = r.data;
        this.total = r.totalCount;
        this.loading = false;
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
   
  }

  private resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }

  doCheck(): void {
    let ids = this.getCheckedIds();
    this.outboundService.alot(ids).subscribe(
      r => {
        this.messageService.info(r.toString());
        this.resetStatus();
      }
    );
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  doWave(): void {
    let ids = this.getCheckedIds();
    this.outboundService.wave(ids).subscribe(
      r => {
        this.messageService.info(r.toString());
        this.resetStatus();
      }
    );
  }

  doPick():void{
    let ids = this.getCheckedIds();
    this.outboundService.pick(ids).subscribe(
      r => {
        this.messageService.info(r.toString());
        this.resetStatus();
      }
    );
  }

  doRecheck(): void {
    let ids = this.getCheckedIds();
    this.recheckService.affirm(ids).subscribe(
      r => this.messageService.info(r.toString())
    );
  }

  doHandOver(): void {
    let ids = this.getCheckedIds();
    this.handOverService.postGen(ids).subscribe(
      r => this.messageService.info(r.toString())
    );
  }

}
