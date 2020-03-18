import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DnService } from '../../services/dn.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-dn-details',
  templateUrl: './dn-details.component.html',
  styleUrls: ['./dn-details.component.css']
})
export class DnDetailsComponent implements OnInit {

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  headerForm: FormGroup;
  id: number;

  dn: Dn = { id: 0, code: "", batchNo: "", whId: "", custId: "", brandId: "", refNo: "", transCode: "", srcCode: "", status: "", expectAt: null, detailDTOList: null };
  detailList: DnDetail[];

  constructor(private fb: FormBuilder, private dnService: DnService,
    private basicDataService: BasicDataService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
    this.headerForm = this.fb.group(["headerForm"]);
  }

  ngOnInit() {
    this.initDetailsForm();
    this.getBasicDatas();
    this.getDetails();
  }

  initDetailsForm(): void {
    this.headerForm.addControl("ctrl_whId", new FormControl());
    this.headerForm.addControl("ctrl_custId", new FormControl());
    this.headerForm.addControl("ctrl_brandId", new FormControl());
    this.headerForm.addControl("ctrl_code", new FormControl());
    this.headerForm.addControl("ctrl_batchNo", new FormControl());
    this.headerForm.addControl("ctrl_refNo", new FormControl());
    this.headerForm.addControl("ctrl_bizCode", new FormControl());
    this.headerForm.addControl("ctrl_goodsType", new FormControl());
    this.headerForm.addControl("ctrl_invoiceNo", new FormControl());
    this.headerForm.addControl("ctrl_isCiq", new FormControl());
  }

  private show() {
    this.headerForm.get("ctrl_code").setValue(this.dn.code);
    this.headerForm.controls["ctrl_whId"].setValue(this.dn.whId.toString());
    this.headerForm.controls["ctrl_custId"].setValue(this.dn.custId.toString());
    
  }

  doRefresh()
  {
    this.getDetails();
  }

  private getDetails() {
    this.dnService.getDetails(this.id).subscribe(r => {
      this.dn = r.dn;
      this.detailList = r.detailList;
      this.show();
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
    this.getBrandByCustId(value);
    this.headerForm.controls["ctrl_brandId"].setValue(this.dn.brandId.toString());
  }

  getBrandByCustId(custId: string) {
    this.basicDataService.getBrandList(custId).subscribe(
      result => {
        this.brands = result.data;
      }
    );
  }
}
