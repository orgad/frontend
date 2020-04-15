import { Component, OnInit } from '@angular/core';
import { OutStService } from '../../services/out-st.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControlDirective, FormControl } from '@angular/forms';

@Component({
  selector: 'app-out-st-details',
  templateUrl: './out-st-details.component.html',
  styleUrls: ['./out-st-details.component.css']
})
export class OutStDetailsComponent implements OnInit {

  st: OutStModel = { id: 0, code: "", whId: 0, custId: 0, brandId: 0 };
  stDs: OutStD[];
  stDelivery: StDelivery = { isNeedExpress: false, expressNode: "", outboundNode: "" };
  stWaves: StWave[];
  stPick: StPick = { typeCode: "" };
  stAlots: StAlot[];

  headerForm: FormGroup;

  id: number;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private stService: OutStService) {
    this.headerForm = this.fb.group(["headerForm"]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.initHeadForm();
    this.getDetails();
  }

  initHeadForm() {
    this.headerForm.addControl("st.whId", new FormControl());
  }

  private getDetails() {
    this.stService.getDetails(this.id).subscribe(
      r => {
        this.st = r.tOutSt;
        this.stDs = r.tOutStDs;
        this.stDelivery = r.tOutStDelivery;
        this.stAlots = r.tOutStAlots;
        this.stWaves = r.tOutStWaves;
        this.stPick = r.tOutStPick;
      }
    );
  }

  doSearch()
  {
    this.getDetails();
  }

}
