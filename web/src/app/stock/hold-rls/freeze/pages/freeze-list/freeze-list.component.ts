import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FreezeService } from '../../services/freeze.service';

@Component({
  selector: 'app-freeze-list',
  templateUrl: './freeze-list.component.html',
  styleUrls: ['./freeze-list.component.css']
})
export class FreezeListComponent implements OnInit {

  queryForm: FormGroup;
  list: FreezeModel[];
  total:number;

  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder,
    private freezeService: FreezeService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.getList();
  }

  doQuery()
  {
    this.getList();
  }

  private getList() {
    this.freezeService.getList().subscribe(
      r => {
        this.list = r.data;
        this.total = r.totalCount;
      }
    );
  }
}
