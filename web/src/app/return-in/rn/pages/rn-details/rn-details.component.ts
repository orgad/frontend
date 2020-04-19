import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RnService } from '../../services/rn.service';

@Component({
  selector: 'app-rn-details',
  templateUrl: './rn-details.component.html',
  styleUrls: ['./rn-details.component.css']
})
export class RnDetailsComponent implements OnInit {

  validateForm: FormGroup;
  id: number;
  rn: RnModel = null;
  rnList: RnDetail[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rnService: RnService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh()
  {
    this.getDetails();
  }

  private getDetails() {
    this.rnService.getDetails(this.id).
      subscribe(
        result => {
          this.rn = result.rn;
          this.rnList = result.detailList;
        }
      );
  }

}
