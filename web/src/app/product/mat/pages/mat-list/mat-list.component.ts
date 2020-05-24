import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatService } from '../../services/mat.service';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.css']
})
export class MatListComponent implements OnInit {

  queryForm: FormGroup;
  isAddVisible:boolean;
  list: Mat[];
  total: number;
  loading:boolean;
  query:SkuQueryForm;

  constructor(private fb: FormBuilder,
    private matService: MatService) {
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
    this.loading = true;
    this.matService.getList().subscribe(
      r => {
      this.list = r.data;
        this.total = r.totalCount
        this.loading = false;
      }
    );
  }

  doAdd()
  {
    this.isAddVisible = true;
  }

  visibleChangeA(value): void {
    this.isAddVisible = value;
    this.getList();
  }

}
