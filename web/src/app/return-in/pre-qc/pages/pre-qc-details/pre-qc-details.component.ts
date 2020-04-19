import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PreQcService } from '../../services/pre-qc.service';

@Component({
  selector: 'app-pre-qc-details',
  templateUrl: './pre-qc-details.component.html',
  styleUrls: ['./pre-qc-details.component.css']
})
export class PreQcDetailsComponent implements OnInit {

  validateForm: FormGroup;
  id: number;
  preQc: PreQcModel = null;
  qcList: PreQcDetail[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private qcService: PreQcService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh() {
    this.getDetails();
  }

  private getDetails() {
    this.qcService.getDetails(this.id).
      subscribe(
        result => {
          this.preQc = result.preQc;
          this.qcList = result.detailList;
        }
      );
  }
}
