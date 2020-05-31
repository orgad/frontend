import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  queryForm: FormGroup;
  isAddVisible: boolean;
  list: any;
  total: number;

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    this.userService.getList().subscribe(
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
