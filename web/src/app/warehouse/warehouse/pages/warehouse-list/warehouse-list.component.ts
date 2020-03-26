import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  queryForm: FormGroup;

  list: any[];

  constructor(private fb: FormBuilder,
    private whService: WarehouseService) {
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
    this.whService.getList().subscribe(x => {
      this.list = x.data;
    });
  }

}
