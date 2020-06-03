import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-biz-list',
  templateUrl: './biz-list.component.html',
  styleUrls: ['./biz-list.component.css']
})
export class BizListComponent implements OnInit {

  queryForm: FormGroup;
  isAddVisible: boolean;
  list: any;
  total: number;

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initForm();
    this.getList();
  }

  private initForm() {
    this.queryForm.addControl("query.code", new FormControl(""));
  }

  doSearch() {
    this.getList();
  }

  private getList() {
    this.roleService.getBizList().subscribe(
      x => {
        this.list = x.data;
        this.total = x.totalCount;
      }
    );
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

  doAdd() {
    this.isAddVisible = true;
  }

}
