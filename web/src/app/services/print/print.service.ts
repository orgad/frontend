import { Injectable } from '@angular/core';
import { getLodop } from '../../../assets/LodopFuncs.js';
import { TmplService } from 'src/app/tmpl/services/tmpl.service.js';
declare var getLodop: any;

@Injectable({
  providedIn: 'root'
})

export class PrintService {

  LODOP: any;

  constructor(private tmplService: TmplService) {

  }

  public Picking(printdataUrl: string, printTemplate: string) {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INIT("单据打印测试")
    this.LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");
    this.LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "我是一张单据");
    this.LODOP.ADD_PRINT_BARCODE(100, 200, 500, 500, "QRCode", "6922266449598");
    this.LODOP.PREVIEW();
  }

  public Print(printData: any, query: QueryPrint) {
    this.tmplService.getTmpls(query).subscribe(x => {
      this.DoPrint(printData, x);
    }
    );
  }

  public DoPrint(printData: any, encrytmplData: string[]) {
    let datas = new Array<string>();
    // 模板解密
    for (let i = 0; i < encrytmplData.length; i++) {
      let tmplData = this.tmplService.base64ToString(encrytmplData[i]);
      datas.push(tmplData);
    }

    //变量赋值
    let code = printData.code;

    console.log(printData);

    this.LODOP = getLodop();
    this.LODOP.PRINT_INIT("单据打印测试")
    this.LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");

    console.log(datas[0], "0");
    eval(datas[0]);
    //this.LODOP.ADD_PRINT_BARCODE(0, 0, 100, 100, "128Auto", code);
    //this.LODOP.ADD_PRINT_TEXT(100, 0, 260, 39, "打印内容");

    if (datas.length > 1) {
      //处理子模板
      for (let i = 0; i < printData.details.length; i++) {
        let row = printData.details[i];
        let binCode = row.binCode;
        let barcode = row.sku;
        let qty = row.qty;
        //this.LODOP.ADD_PRINT_TEXT(100, 15, 100, 20, binCode);
        //this.LODOP.ADD_PRINT_TEXT(100, 149, 100, 20, barcode);
        //this.LODOP.ADD_PRINT_TEXT(100, 289, 100, 20, qty);
        eval(datas[1]);
      }
    }

    this.LODOP.PREVIEW();
  }
}
