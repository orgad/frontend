import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  queryForm: FormGroup;

  list: ShopModel[];
  total: number;

  constructor(private fb: FormBuilder,
    private shopService: ShopService) {
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
    this.shopService.getList().subscribe(
      r => {
      this.list = r.data;
        this.total = r.totalCount
      }
    );
  }

}
