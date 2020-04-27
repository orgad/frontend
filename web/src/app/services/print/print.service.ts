import { Injectable } from '@angular/core';
import { getLodop } from '../../../assets/LodopFuncs.js';
declare var getLodop: any;

@Injectable({
  providedIn: 'root'
})

export class PrintService {

  LODOP:any;

  constructor() { 
    //this.LODOP = getLodop();
  }

  public Picking(printdataUrl: string, printTemplate: string) {
    this.LODOP = getLodop();
		this.LODOP.PRINT_INIT("单据打印测试")
		this.LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");
		this.LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "我是一张单据");
		this.LODOP.ADD_PRINT_BARCODE(100, 200, 500, 500, "QRCode", "6922266449598");
		this.LODOP.PREVIEW();
  }
}
