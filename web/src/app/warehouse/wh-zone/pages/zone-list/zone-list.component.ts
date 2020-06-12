import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ZoneService } from '../../services/zone.service';
import { RightService } from 'src/app/auth/access-control/services/right.service';
import { ActivatedRoute } from '@angular/router';
import { AuthDataService } from 'src/app/services/auth/auth-data.service';
import { Auth } from 'src/app/datas/auth';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {

  actions: any = []; //{ code: 'add',title:'新增' }, { code: "edit",title:'编辑' }
  queryForm: FormGroup;
  list: any[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private authData: AuthDataService,
    private zoneService: ZoneService, private rightService: RightService) {
    this.queryForm = this.fb.group(["queryForm"]);
  }

  ngOnInit() {
    this.initQueryForm();
    this.initRight();
    this.getList();
  }

  initQueryForm(): void {
    this.queryForm.addControl("query.code", new FormControl());
  }

  initRight() {
    let roles = this.authData.get(Auth.roles) as any;


    let navId = this.route.snapshot.queryParams["id"];
    this.rightService.getNavActionByRolesNav(roles, navId).subscribe(x => {
      this.actions = x.detailList;
    }
    )
  }

  doSearch(): void {
    this.initRight();
    this.getList();
  }

  doAction(value: any) {
    console.log(value);
  }

  private getList(): void {
    this.zoneService.getList().subscribe(x => {
      this.list = x.data;
    });
  }

}
