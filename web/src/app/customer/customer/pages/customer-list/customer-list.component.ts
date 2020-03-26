import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  queryForm: FormGroup;

  list: CustomerModel[];
  total: number;

  constructor(private fb: FormBuilder,
    private customerService: CustomerService) {
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
    this.customerService.getList().subscribe(
      r => {
      this.list = r.data;
        this.total = r.totalCount
      }
    );
  }

}
