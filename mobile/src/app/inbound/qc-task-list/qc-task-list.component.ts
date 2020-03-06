import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { QcService } from '../services/qc.service';

@Component({
  selector: 'app-qc-task-list',
  templateUrl: './qc-task-list.component.html',
  styleUrls: ['./qc-task-list.component.css']
})
export class QcTaskListComponent implements OnInit {

  constructor(
    private _location:Location,
    private qcService:QcService) { }

  list : QcModel[];

  ngOnInit() {
    this.getList();
  }

  goBack():void{
    this._location.back();
  }
   
  private getList():void{
      this.qcService.getList().subscribe(
        r=> {
          this.list = r.data;
        }
      );
  }

}
