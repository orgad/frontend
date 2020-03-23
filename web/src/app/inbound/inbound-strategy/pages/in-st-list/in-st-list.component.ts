import { Component, OnInit } from '@angular/core';
import { InStService } from '../../services/in-st.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-in-st-list',
  templateUrl: './in-st-list.component.html',
  styleUrls: ['./in-st-list.component.css']
})
export class InStListComponent implements OnInit {

  /*分页用 */
  total = 0;
  pageIndex = 1;
  pageSize = 20;

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];
  list:InStModel[];

  queryForm:FormGroup;

  querySt = {whId:0,custId:0,brandId:0,code:""};

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  /*显示用*/
  listOfDisplayData: AsnModel[] = [];
  /*显示用*/
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  constructor(private stService : InStService,
    private basicDataService: BasicDataService,
    private fb: FormBuilder,
    ) 
    { 
      this.queryForm = this.fb.group(["queryForm"]);
    }

  ngOnInit() {
    this.initQueryForm();
    this.getBasicDatas();
    this.getList();
  }

  initQueryForm()
  {
    this.queryForm.addControl(`querySt.whId`, new FormControl());
    this.queryForm.addControl(`querySt.brandId`, new FormControl());
    this.queryForm.addControl(`querySt.custId`, new FormControl());
    this.queryForm.addControl(`querySt.code`, new FormControl());
  }

  doSearch():void
  {
    this.getList();
  }

  getList():void{
     this.stService.getList().subscribe(r=>
      {
        console.log(r);
        this.list = r;
      });
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
    this.queryForm.controls["querySt.brandId"].setValue(null);
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

  currentPageDataChange(value)
  {

  }

  changePageIndex(value)
  {

  }

  changePageSize(value)
  {

  }
}
