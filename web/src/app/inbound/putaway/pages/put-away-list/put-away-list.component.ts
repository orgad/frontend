import { Component, OnInit } from '@angular/core';
import { PutAwayService } from '../../services/put-away.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-put-away-list',
  templateUrl: './put-away-list.component.html',
  styleUrls: ['./put-away-list.component.css']
})
export class PutAwayListComponent implements OnInit {

  ptList : PutAwayModel[];
  total : number;
  queryForm:FormGroup;
  listOfDisplayData: PutAwayModel[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isCollapse: boolean = true;
  isAllDisplayDataChecked: boolean = true;
  isIndeterminate: boolean = true;

  constructor(private putAwayService:PutAwayService,private fb:FormBuilder) { }

  ngOnInit() {
    this.queryForm = this.fb.group(["queryForm"]);
    this.queryForm.addControl("queryPt_code",new FormControl());
    this.getPutAwayList();
  }

  doSearch():void
  {
    this.getPutAwayList();
  }

  doRefresh():void
  {
    this.getPutAwayList();
  }

  getPutAwayList():void
  {
    this.putAwayService.getPutAwayList().subscribe(
        result=> { 
          this.ptList =  result.data;
          this.total = result.totalCount;
        }
    );
  }

  currentPageDataChange($event: PutAwayModel[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {

  }

  checkAll(value: boolean): void {

  }
}
