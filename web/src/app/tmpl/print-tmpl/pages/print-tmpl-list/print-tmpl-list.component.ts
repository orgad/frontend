import { Component, OnInit } from '@angular/core';
import { TmplService } from 'src/app/tmpl/services/tmpl.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-print-tmpl-list',
  templateUrl: './print-tmpl-list.component.html',
  styleUrls: ['./print-tmpl-list.component.css', './../../../../css/list-component.css']
})
export class PrintTmplListComponent implements OnInit {

  queryForm: FormGroup;
  list: PrintTmplModel[];
  total: number = 0;
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder,
    private tmplService: TmplService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  private initQueryForm() {
    this.queryForm.addControl("query.whId", new FormControl(""));
  }

  doSearch(){
    this.getList();
  }

  getList() {
    this.tmplService.getPrintList().subscribe(
      r => {
        this.list = r.data;
        this.total = r.total;
      }
    );
  }

}
