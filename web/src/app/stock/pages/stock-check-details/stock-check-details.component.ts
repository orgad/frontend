import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockCheckService } from '../../services/stock-check.service';
import { BasicDataService } from 'src/app/outer/basic-data.service';

@Component({
  selector: 'app-stock-check-details',
  templateUrl: './stock-check-details.component.html',
  styleUrls: ['./stock-check-details.component.css']
})
export class StockCheckDetailsComponent implements OnInit {

  stockCheck: StockCheckModel = {id:0,whId:0,code:"",goodsType:"",typeCode:"",typeMode:""};
  checkLimits: StockCheckLimits[];
  detailList: StockCheckDetail[];

  whs: BasicData[];
  custs: BasicData[];
  brands: BasicData[];

  headerForm: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private basicDataService:BasicDataService,
    private stockCheckService: StockCheckService) {
    this.id = this.route.snapshot.params["id"];
    this.headerForm = this.fb.group(["headerForm"]);
  }

  ngOnInit() {
    this.initDetailsForm();
    this.getBasicDatas();
    this.getList();
  }

  private initDetailsForm()
  {
    this.headerForm.addControl("ctrl_whId", new FormControl());
    this.headerForm.addControl("ctrl_custId", new FormControl());
    this.headerForm.addControl("ctrl_brandId", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
  }

  doRefresh() {
    this.getList();
  }

  private getList() {
    this.stockCheckService.getDetails(this.id).subscribe(
      r => {
        this.stockCheck = r.stockCheck;
        this.checkLimits = r.checkLimits;
        this.detailList = r.detailList;
        this.showDetails(this.stockCheck);
      }
    );
  }
  
  private showDetails(stockCheck:StockCheckModel)
  {
      this.headerForm.controls["ctrl_whId"].setValue(stockCheck.whId.toString());
  }
}
