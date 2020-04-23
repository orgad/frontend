import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor(private router: Router) {

  }

  data: Array<{ id: number, icon: string, text: string }> = [
    { id: 1, icon: "assets/img/inbound/comments.png", text: "入库" },
    { id: 2, icon: "assets/img/outbound/auto.png", text: "出库" },
    { id: 3, icon: "assets/img/stock/home-fill.png", text: "存储" },
    { id: 4, icon: "assets/img/logistic/logistic-logo.png", text: "运输" },
    { id: 5, icon: "assets/img/query/search.png", text: "查询" },
    { id: 0, icon: "assets/img/all.png", text: "示例" },
    { id: -1, icon: "barcode", text: "条码" }
  ];

  click(event): void {
    let val = event.data.id;
    if (val == 0) {
      this.router.navigateByUrl("example");
    }
    if (val == 1) {
      this.router.navigateByUrl("inbound");
    }
    if (val == 2) {
      this.router.navigateByUrl("outbound");
    }
    if (val == 3) {
      this.router.navigateByUrl("stock");
    }
    if (val == 5) {
      this.router.navigateByUrl("query");
    }
    if (val == -1) {
      this.router.navigateByUrl("code");
    }
  }

  ngOnInit() {
  }

}
