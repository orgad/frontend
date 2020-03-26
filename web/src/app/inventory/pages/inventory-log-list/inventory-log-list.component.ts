import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-inventory-log-list',
  templateUrl: './inventory-log-list.component.html',
  styleUrls: ['./inventory-log-list.component.css']
})
export class InventoryLogListComponent implements OnInit {

  invtLogList: InvtLogModel[];
  listOfDisplayData: InvtLogModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  queryForm: FormGroup;

  constructor(private invtService: InventoryService, private basicDataService: BasicDataService,
    private fb: FormBuilder) {
    this.queryForm = this.fb.group(["queryForm"]);
    this.queryForm.addControl("queryInvtLog.whId", new FormControl());
    this.queryForm.addControl("queryInvtLog.custId", new FormControl());
    this.queryForm.addControl("queryInvtLog.brandId", new FormControl());
    this.queryForm.addControl("queryInvtLog.barcode", new FormControl());
  }

  ngOnInit() {
    this.getBasicDatas();
    this.getInvtList();
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
    this.getInvtList();
  }

  resetForm(): void {

  }

  private getInvtList(): void {
    const barcode = this.queryForm.controls["queryInvtLog.barcode"].value;
    
    this.invtService.getInvtLogList(barcode).subscribe(
      result => {
        this.invtLogList = result.data;
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
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

}
