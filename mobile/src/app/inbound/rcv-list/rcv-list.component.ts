import { Component, OnInit } from '@angular/core';
import { RcvService } from '../services/rcv.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rcv-list',
  templateUrl: './rcv-list.component.html',
  styleUrls: ['./rcv-list.component.css']
})
export class RcvListComponent implements OnInit {

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
   
}
