import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-inventory-detail-list',
  templateUrl: './inventory-detail-list.component.html',
  styleUrls: ['./inventory-detail-list.component.css']
})
export class InventoryDetailListComponent implements OnInit {

  sku: string;
  invtDetails: InvtDetailModel[];
  listOfDisplayData: InvtDetailModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;
  total: number;

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
    this.getDetailList();
  }

  private getDetailList(): void {
    const barcode = this.queryForm.controls["queryInvt.barcode"].value;
    this.invtService.getInvtDetailList(barcode).subscribe(
      result => {
        this.invtDetails = result.data;
        this.total = result.totalCount;
      }
    );
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
    this.getDetailList();
  }

  resetForm(): void {
    this.queryForm.reset();
  }

  currentPageDataChange($event: InvtDetailModel[]): void {
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
