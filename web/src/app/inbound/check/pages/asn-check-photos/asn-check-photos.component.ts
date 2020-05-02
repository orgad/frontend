import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsnCheckService } from '../../services/asn-check.service';
import { id_ID } from 'ng-zorro-antd';

@Component({
  selector: 'app-asn-check-photos',
  templateUrl: './asn-check-photos.component.html',
  styleUrls: ['./asn-check-photos.component.css']
})
export class AsnCheckPhotosComponent implements OnInit {

  detail: AsnCheckDetail = null;
  hid: number;
  id: number;

  constructor(private route: ActivatedRoute,
    private asnCheckService: AsnCheckService) { }

  ngOnInit() {
    this.hid = this.route.snapshot.params["id"];
    this.id = this.route.snapshot.queryParams["id"];
    this.getDetail();
  }

  private getDetail(): void {
    this.asnCheckService.getDetails(this.hid).subscribe(r => {
      
      r.asnCheckDs.forEach((val) => {
        if(val.id==this.id) this.detail = val;
      });
    });
  }

}