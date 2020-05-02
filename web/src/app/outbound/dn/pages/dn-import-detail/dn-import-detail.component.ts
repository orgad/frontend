import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DnService } from '../../services/dn.service';

@Component({
  selector: 'app-dn-import-detail',
  templateUrl: './dn-import-detail.component.html',
  styleUrls: ['./dn-import-detail.component.css']
})
export class DnImportDetailComponent implements OnInit {

  id :number;
  code : number;
  uploadUrl:string;
  
  constructor(private route:ActivatedRoute,
    private dnService:DnService) {
      this.uploadUrl = this.dnService.getUploadUrl();
     }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.uploadUrl  = this.uploadUrl + "?id="+ this.id + "&code=" + this.route.snapshot.params["id"];
  }
}
