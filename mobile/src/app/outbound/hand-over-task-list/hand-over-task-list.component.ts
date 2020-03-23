import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HandOverService } from '../services/hand-over.service';

@Component({
  selector: 'app-hand-over-task-list',
  templateUrl: './hand-over-task-list.component.html',
  styleUrls: ['./hand-over-task-list.component.css']
})
export class HandOverTaskListComponent implements OnInit {

  list:HandOverModel[];
  
  constructor(private handOverService:HandOverService,private _location:Location) { }

  ngOnInit() {
    this.getList();
  }

  private getList():void{
    this.handOverService.getList(0).subscribe(r=>this.list = r.data);
  }

  goBack():void{
    this._location.back();
  }
   
  doRefresh():void{
    this.getList();
  }
}
