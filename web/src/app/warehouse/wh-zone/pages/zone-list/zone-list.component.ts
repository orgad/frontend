import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {

  queryForm: FormGroup;

  list: any[];

  constructor(private fb: FormBuilder,
    private zoneService: ZoneService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  initQueryForm(): void {
    this.queryForm.addControl("query.code", new FormControl());
  }

  ngOnInit() {
    this.getList();
  }

  private getList(): void {
    this.zoneService.getList().subscribe(x => {
      this.list = x.data;
    });
  }

}
