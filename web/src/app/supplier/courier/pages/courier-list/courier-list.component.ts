import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CourierService } from '../../services/courier.service';

@Component({
  selector: 'app-courier-list',
  templateUrl: './courier-list.component.html',
  styleUrls: ['./courier-list.component.css','./../../../../css/list-component.css']
})
export class CourierListComponent implements OnInit {

  queryForm: FormGroup;

  list: CourierModel[];
  total: number;

  constructor(private fb: FormBuilder,
    private courierService: CourierService) {
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
    this.courierService.getList().subscribe(
      r => {
      this.list = r.data;
        this.total = r.totalCount
      }
    );
  }

  toggleCollapse()
  {
    
  }

  doSearch():void
  {
    this.getList();
  }

}
