import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inbound-nav-list',
  templateUrl: './inbound-nav-list.component.html',
  styleUrls: ['./inbound-nav-list.component.css']
})
export class InboundNavListComponent implements OnInit {

  data1: Array<{ id: number, icon: string, text: string }> = [
    { id: 10, icon: "assets/img/inbound/comments.png", text: "验货任务清单" },
    { id: 12, icon: "assets/img/inbound/comments.png", text: "收货任务清单" },
    { id: 13, icon: "assets/img/inbound/comments.png", text: "质检任务清单" },
    { id: 15, icon: "assets/img/inbound/comments.png", text: "退货包裹扫描" },
    { id: 16, icon: "assets/img/inbound/comments.png", text: "退货收货清单" },
    { id: 14, icon: "assets/img/inbound/comments.png", text: "上架任务清单" },
  ];

  data2: Array<{ id: number, icon: string, text: string }> = [
    { id: 11, icon: "assets/img/inbound/comments.png", text: "入库清单" },
  ];

  constructor(private router: Router
    , private _location: Location) { }

  ngOnInit() {
  }

  click(event): void {
    let val = event.data.id;
    if (val == 10) { this.router.navigateByUrl("inbound/check-task-list"); }
    if (val == 11) { this.router.navigateByUrl("inbound/list"); }
    if (val == 12) { this.router.navigateByUrl("inbound/rcv-list"); }
    if (val == 13) { this.router.navigateByUrl("inbound/qc-list"); }
    if (val == 15) { this.router.navigateByUrl("returnIn/pkg-scan"); }
    if (val == 16) { this.router.navigateByUrl("returnIn/rcv-task-list"); }
    if (val == 14) { this.router.navigateByUrl("inbound/put-away-list"); }
    console.log(val);
  }

  goBack(): void {
    this._location.back();
  }
}
