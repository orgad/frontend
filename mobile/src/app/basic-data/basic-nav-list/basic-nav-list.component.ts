import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basic-nav-list',
  templateUrl: './basic-nav-list.component.html',
  styleUrls: ['./basic-nav-list.component.css']
})
export class BasicNavListComponent implements OnInit {

  data1: Array<{ id: number, icon: string, text: string }> = [
    { id: 10, icon: "assets/img/barcode.png", text: "条码" },
    { id: 11, icon: "assets/img/barcode.png", text: "物料" },
    { id: 12, icon: "assets/img/barcode.png", text: "库位" },
  ];

  constructor(private router: Router
    , private _location: Location) { }

  ngOnInit() {
    
  }

  click(event): void {
    let val = event.data.id;
    if (val == 10) { this.router.navigateByUrl("code/barcode"); }
    if (val == 11) { this.router.navigateByUrl("code/mat"); }
    if (val == 12) { this.router.navigateByUrl("code/bin"); }
  }

  goBack(): void {
    this._location.back();
  }
}
