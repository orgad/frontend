import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ExpressService } from '../../services/express.service';

@Component({
  selector: 'app-express-list',
  templateUrl: './express-list.component.html',
  styleUrls: ['./express-list.component.css']
})
export class ExpressListComponent implements OnInit {
  isVisible = false;
  isCollapse = true;
  queryForm: FormGroup;
  expressList:ExpressModel[];
  pageIndex:1;
  pageSize:20;

  total:number;

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: any = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor( private fb: FormBuilder,
    private messageService: NzMessageService,
    private expressService:ExpressService) {
      this.queryForm = this.fb.group(["queryForm"]);
     }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  initQueryForm(): void {
    this.queryForm.addControl(`query.code`, new FormControl());
  }

  doSearch()
  {
     this.getList();
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    /*
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
    */
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  visibleChange(value):void
  {
    this.isVisible = value;
  }

  doAdd(): void {
    //弹窗
    this.isVisible = true;
  }

  
  refreshStatus(): void {

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

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

  resetStatus(): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = false);
  }


  private getList():void
  {
      this.expressService.getList().subscribe(
        r=>{
          this.expressList = r.data;
          this.total = r.totalCount;
        }
      );
  }

}
