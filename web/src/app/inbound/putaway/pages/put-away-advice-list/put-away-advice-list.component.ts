import { Component, OnInit } from '@angular/core';
import { PutAwayService } from '../../services/put-away.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-put-away-advice-list',
  templateUrl: './put-away-advice-list.component.html',
  styleUrls: ['./put-away-advice-list.component.css']
})
export class PutAwayAdviceListComponent implements OnInit {

  adviceList: PutAwayAdviceModel[];
  listOfDisplayData: InvtLogModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  queryForm: FormGroup;

  constructor(private putAwayService: PutAwayService, private basicDataService: BasicDataService,
    private fb: FormBuilder) {
    this.queryForm = this.fb.group(["queryForm"]);
    this.queryForm.addControl("queryAdvice.whId", new FormControl());
    this.queryForm.addControl("queryAdvice.custId", new FormControl());
    this.queryForm.addControl("queryAdvice.brandId", new FormControl());
    this.queryForm.addControl("queryAdvice.barcode", new FormControl());
  }

  ngOnInit() {
    this.getBasicDatas();
    this.getAdviceList();
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
    //this.validateForm.controls["asn.brandId"].setValue(null);
    this.getBrandByCustId(value);
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }

  doSearch(): void {
    this.getAdviceList();
  }

  resetForm(): void {

  }

  private getAdviceList(): void {
    this.putAwayService.getAdviceList().subscribe(
      result => {
        this.adviceList = result.data;
      }
    );
  }

  currentPageDataChange($event: InvtLogModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }


  refreshStatus(): void {

  }

  checkAll(value: boolean): void {

  }

}
