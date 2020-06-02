import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavService } from '../../services/nav.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-action-detail-list',
  templateUrl: './nav-action-detail-list.component.html',
  styleUrls: ['./nav-action-detail-list.component.css']
})
export class NavActionDetailListComponent implements OnInit {

  id: number;
  showForm: FormGroup;
  nav = { code: "" };
  list: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private navService: NavService) {
    this.showForm = this.fb.group(["showForm"]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  doRefresh() {
    this.getDetails();
  }

  getDetails() {
    this.navService.getDetails(this.id).subscribe(x => {
      this.nav = x.nav;
      this.list = x.detailList;
    });
  }

}
