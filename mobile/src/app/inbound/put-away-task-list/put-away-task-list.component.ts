import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { PaService } from '../services/pa.service';

@Component({
  selector: 'app-put-away-task-list',
  templateUrl: './put-away-task-list.component.html',
  styleUrls: ['./put-away-task-list.component.css']
})
export class PutAwayTaskListComponent implements OnInit {

  constructor(
    private _location:Location,
    private paService:PaService) { }

  list : PaModel[];

  ngOnInit() {
    this.getList();
  }

  goBack():void{
    this._location.back();
  }
   
  private getList():void{
      this.paService.getList().subscribe(
        r=> {
          this.list = r.data;
        }
      );
  }

}
