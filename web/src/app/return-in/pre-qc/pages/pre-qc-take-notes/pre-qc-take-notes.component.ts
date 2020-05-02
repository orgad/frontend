import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PreQcService } from '../../services/pre-qc.service';
import { RnService } from 'src/app/return-in/rn/services/rn.service';

@Component({
  selector: 'app-pre-qc-take-notes',
  templateUrl: './pre-qc-take-notes.component.html',
  styleUrls: ['./pre-qc-take-notes.component.css']
})
export class PreQcTakeNotesComponent implements OnInit {

  queryForm: FormGroup;
  list: RnDetail[];
  radioValue = "Good";
  mapOfCheckedId: { [key: string]: boolean } = {};
  qcChecked: { [key: string]: boolean } = {};
  
  constructor(private fb: FormBuilder,
    private rnService: RnService,
    private qcSerice: PreQcService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
  }

  private initQueryForm() {
    this.queryForm.addControl("qc.trackingNo", new FormControl());
  }

  doSearch() {
    let no = this.queryForm.controls["qc.trackingNo"].value;
    this.getList(no);
  }

  getList(no: string) {
    this.rnService.getDetailList(no).subscribe(
      r => {
        this.list = r;
      }
    );
  }

  doCheck() {

  }
}
