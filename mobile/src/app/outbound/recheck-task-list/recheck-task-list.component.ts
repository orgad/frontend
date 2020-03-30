import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecheckService } from '../services/recheck.service';

@Component({
  selector: 'app-recheck-task-list',
  templateUrl: './recheck-task-list.component.html',
  styleUrls: ['./recheck-task-list.component.css']
})
export class RecheckTaskListComponent implements OnInit {

  list:RecheckModel[];
  
  constructor(private recheckService:RecheckService,private _location:Location) { }

  ngOnInit() {
    this.getList();
  }

  private getList():void{
    this.recheckService.getTaskList(0).subscribe(r=>this.list = r.data);
  }

  goBack():void{
    this._location.back();
  }
   
  doRefresh():void{
    this.getList();
  }
}
