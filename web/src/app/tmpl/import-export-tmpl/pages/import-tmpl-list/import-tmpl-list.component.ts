import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TmplService } from 'src/app/tmpl/services/tmpl.service';

@Component({
  selector: 'app-import-tmpl-list',
  templateUrl: './import-tmpl-list.component.html',
  styleUrls: ['./import-tmpl-list.component.css']
})
export class ImportTmplListComponent implements OnInit {
  
  queryForm: FormGroup;
  list: ImportTmplModel[];
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
    this.tmplService.getImpList().subscribe(
      r => {
        this.list = r.data;
        this.total = r.total;
      }
    );
  }

}
