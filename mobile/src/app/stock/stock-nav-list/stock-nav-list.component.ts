import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-nav-list',
  templateUrl: './stock-nav-list.component.html',
  styleUrls: ['./stock-nav-list.component.css']
})
export class StockNavListComponent implements OnInit {

  data: Array<{ id: number, icon: string, text: string }> = [
    { id: 30, icon: "assets/img/stock/home-fill.png", text: "盘点任务清单" },
    { id: 31, icon: "assets/img/stock/home-fill.png", text: "移货任务清单" },
  ];

  constructor(private router: Router
    ,private _location:Location) { }

  ngOnInit() {
  }

  click(event): void {
    let val = event.data.id;
    if (val == 30) { this.router.navigateByUrl("stock/check/task-list");}
    if (val == 31) { this.router.navigateByUrl("stock/move/task-list");}
    console.log(val);
  }

  goBack():void{
    this._location.back();
  }

}
