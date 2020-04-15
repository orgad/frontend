import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SkuService } from '../../services/sku.service';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.css']
})
export class SkuListComponent implements OnInit {

  queryForm: FormGroup;
  isAddVisible:boolean;
  list: SkuModel[];
  total: number;
  loading:boolean;

  constructor(private fb: FormBuilder,
    private skuService: SkuService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  initQueryForm(): void {
    this.queryForm.addControl("query.code", new FormControl());
  }

  private getList(): void {
    this.loading = true;
    this.skuService.getList().subscribe(
      r => {
        console.log(r.data);
      this.list = r.data;
        this.total = r.totalCount
        this.loading = false;
      }
    );
  }

  doSearch(){
    this.getList();
  }

  doAdd()
  {
    this.isAddVisible = true;
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

}
