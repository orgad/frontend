import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'app-bin-list',
  templateUrl: './bin-list.component.html',
  styleUrls: ['./bin-list.component.css']
})
export class BinListComponent implements OnInit {

  queryForm: FormGroup;

  list: any[];

  constructor(private fb: FormBuilder,
    private binService: BinService) {
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
    this.binService.getList().subscribe(x => {
      this.list = x.data;
    });
  }

}
