import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  queryForm: FormGroup;
  list: CatalogModel[];
  isAddVisible: boolean;
  
  constructor(private fb: FormBuilder,
    private catService: CatalogService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.getList();
  }

  doSearch()
  {
    this.getList();
  }

  private initQueryForm() {
    this.queryForm.addControl("query.code", new FormControl(""));
  }

  getList() {
    this.catService.getList().subscribe(
      r => {
        this.list = r.data;
      }
    );
  }
}
