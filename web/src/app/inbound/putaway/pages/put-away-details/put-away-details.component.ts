import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PutAwayService } from '../../services/put-away.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-away-details',
  templateUrl: './put-away-details.component.html',
  styleUrls: ['./put-away-details.component.css']
})
export class PutAwayDetailsComponent implements OnInit {

  id: number;
  putAway: PutAwayModel = { id: 0, code: "", whId: 0, firstPutawayAt: null, inboundId: 0, lastPutawayAt: null, status: "" };
  detaillist: PutAwayDetail[];

  constructor(private putawayService: PutAwayService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh():void
  {
    this.getDetails();
  }

  private getDetails(): void {
    this.putawayService.getDetails(this.id).subscribe(
      r => {
        this.putAway = r.putAway;
        this.detaillist = r.putAwayDs;
      }
    );
  }
}
