import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css','./../../../css/list-component.css']
})
export class RoleListComponent implements OnInit {

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

  private initForm(){
    this.queryForm.addControl("query.code",new FormControl(""));
  }

  doSearch() {
    this.getList();
  }

  private getList() {
    this.roleService.getList().subscribe(
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
