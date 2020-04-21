import { Component, OnInit } from '@angular/core';
import { FreezeService } from '../../services/freeze.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-freeze-details',
  templateUrl: './freeze-details.component.html',
  styleUrls: ['./freeze-details.component.css']
})
export class FreezeDetailsComponent implements OnInit {

  id:number;
  freeze:FreezeModel;
  detailList:FreezeDetail[];
  freezeLimits:FreezeLimits[];

  headForm:FormGroup;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private freezeService:FreezeService) {
      this.headForm = this.fb.group(["headForm"]);
     }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh() {
    this.getDetails();
  }

  private getDetails() {
    this.freezeService.getDetails(this.id).subscribe(
      r => {
        this.freeze = r.freeze;
        this.freezeLimits = r.freezeLimits;
        this.detailList = r.detailList;
      }
    );
  }
  
}
