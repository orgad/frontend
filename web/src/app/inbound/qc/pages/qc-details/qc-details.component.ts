import { Component, OnInit } from '@angular/core';
import { QcService } from '../../services/qc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qc-details',
  templateUrl: './qc-details.component.html',
  styleUrls: ['./qc-details.component.css']
})
export class QcDetailsComponent implements OnInit {

  id: number;
  qc: QcModel = null;
  qcList: QcDetail[];
  constructor(private qcService: QcService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.qcService.getDetails(this.id).subscribe(
      r => {
        this.qc  = r.qc;
        this.qcList = r.qcDs;

      }
    );
  }

}
