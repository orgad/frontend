import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { AsnCheckService } from '../services/asn-check.service';

@Component({
  selector: 'app-check-task-list',
  templateUrl: './check-task-list.component.html',
  styleUrls: ['./check-task-list.component.css']
})
export class CheckTaskListComponent implements OnInit {

  constructor(
    private _location:Location,
    private asnCheckService:AsnCheckService) { }

  list : AsnCheckModel[];

  ngOnInit() {
    this.getList();
  }

  goBack():void{
    this._location.back();
  }
   
  private getList():void{
      this.asnCheckService.list().subscribe(
        r=> {
          this.list = r.data;
        }
      );
  }

}
