import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  invtList: InvtModel[];
  listOfDisplayData: InvtModel[] = [];
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
    this.queryForm.addControl("queryInvt.whId", new FormControl());
    this.queryForm.addControl("queryInvt.custId", new FormControl());
    this.queryForm.addControl("queryInvt.brandId", new FormControl());
    this.queryForm.addControl("queryInvt.barcode", new FormControl());
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
    this.queryForm.reset();
  }

  private getInvtList(): void {
    this.invtService.getInvtList().subscribe(
      result => {
        this.invtList = result.data;
      }
    );
  }

  currentPageDataChange($event: InvtModel[]): void {
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

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => this.mapOfCheckedId[item.id] = value);
  }

}
