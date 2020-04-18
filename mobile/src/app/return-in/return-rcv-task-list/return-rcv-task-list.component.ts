import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RcvService } from 'src/app/inbound/services/rcv.service';

@Component({
  selector: 'app-return-rcv-task-list',
  templateUrl: './return-rcv-task-list.component.html',
  styleUrls: ['./return-rcv-task-list.component.css']
})
export class ReturnRcvTaskListComponent implements OnInit {

  list:InboundModel[];
  
  constructor(private rcvService:RcvService,private _location:Location) { }

  ngOnInit() {
    this.getList();
  }

  private getList():void{
    this.rcvService.getRcvList().subscribe(r=>this.list = r.data);
  }

  goBack():void{
    this._location.back();
  }
   
  doRefresh():void{
    this.getList();
  }

}
