import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PickService } from '../services/pick.service';

@Component({
  selector: 'app-pick-task-list',
  templateUrl: './pick-task-list.component.html',
  styleUrls: ['./pick-task-list.component.css']
})
export class PickTaskListComponent implements OnInit {

  constructor(
    private _location:Location,
    private pickService:PickService) { }

  list : PickingModel[];

  ngOnInit() {
    this.getList();
  }

  goBack():void{
    this._location.back();
  }
   
  private getList():void{
      this.pickService.getList().subscribe(
        r=> {
          this.list = r.data;
        }
      );
  }

}
