import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-query-nav-list',
  templateUrl: './query-nav-list.component.html',
  styleUrls: ['./query-nav-list.component.css']
})
export class QueryNavListComponent implements OnInit {

  data: Array<{ id: number, icon: string, text: string }> = [
    { id: 50, icon: "assets/img/query/search.png", text: "条码库存" },
    { id: 51, icon: "assets/img/query/search.png", text: "库位库存" },
    { id: 52, icon: "assets/img/query/search.png", text: "条码信息" },
  ];

  constructor(private router: Router
    , private _location: Location) { }

  ngOnInit() {
  }

  click(event): void {
    let val = event.data.id;
    if (val == 50) { this.router.navigateByUrl("query/by-barcode"); }
    if (val == 51) { this.router.navigateByUrl("query/by-bin-code"); }
    if (val == 52) { this.router.navigateByUrl("query/sku-by-barcode"); }
    console.log(val);
  }

  goBack(): void {
    this._location.back();
  }

}
