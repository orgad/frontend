import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  queryForm: FormGroup;
  list: ProductModel[];
  isAddVisible: boolean;

  constructor(private fb: FormBuilder,
    private prodService: ProductService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  doSearch()
  {
    this.getList();
  }

  private initQueryForm() {
    this.queryForm.addControl("query.code", new FormControl(""));
  }

  getList() {
    this.prodService.getList().subscribe(
      r => {
        this.list = r.data;
      }
    );
  }

  doAdd() {
    this.isAddVisible = true;
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }
}
