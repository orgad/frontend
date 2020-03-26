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

  list: SkuModel[];
  total: number;

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
    this.skuService.getList().subscribe(
      r => {
      this.list = r.data;
        this.total = r.totalCount
      }
    );
  }

}
