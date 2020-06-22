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
    this.tmplService.getPrintTmpls(query).subscribe(x => {
      this.DoPrint(printData, x);
    }
    );
  }

  public Prints(printDatas: any, query: QueryPrint) {
    this.tmplService.getPrintTmpls(query).subscribe(x => {
      this.DoPrints(printDatas, x);
    }
    );
  }

  //多页打印
  public DoPrints(printDatas: any, encrytmplData: string[]) {
    this.LODOP = getLodop();

    const LODOP = this.LODOP;
    LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", true);//生成程序时，内容参数有变量用变量，无变量用具体值
    LODOP.PRINT_INITA(0, 0, 2100, 2970, "A4纸张");

    let datas = this.getPrintData(encrytmplData);

    for (let i = 0; i < printDatas.length; i++) {
      LODOP.NewPage();
      let item = printDatas[i];
      this.PrintOne(item, datas);
    }

    this.LODOP.PREVIEW();
  }

  private getPrintData(encrytmplData: any): string[] {
    let datas = new Array<string>();
    // 模板解密
    for (let i = 0; i < encrytmplData.length; i++) {
      let tmplData = this.tmplService.base64ToString(encrytmplData[i]);
      datas.push(tmplData);
    }
    return datas;
  }

  private handleTmpl(data: string) {
    //设置行高
    //对data进行处理
    //字符串解析
    var childs = data.split(";");
    for (let i = 0; i < childs.length; i++) {
      //截取每一行的左右括号
      var item = childs[i];
      var left = item.indexOf('(');
      var right = item.indexOf(')');
      //取出top值
      var substring = item.substring(left + 1, right - 1).split(",")[1];
      //修改top值
      item = item.replace("" + substring, "line");
      childs[i] = item;
    }
    data = childs.join(';');
    return data;
  }

  private PrintOne(printData: any, datas: string[]) {
    //主模板赋值
    let LODOP = this.LODOP;

    eval(datas[0]);
    LODOP.SET_PRINT_STYLEA("code", "CONTENT", printData.code);

    if (datas.length > 1) {
      let data = this.handleTmpl(datas[1]);
      //处理子模板
      for (let i = 0; i < printData.detailList.length; i++) {
        let row = printData.detailList[i];
        let line = 150 + i * 10;
        eval(data);
        LODOP.SET_PRINT_STYLEA("binCode", "CONTENT", row.binCode);
        LODOP.SET_PRINT_STYLEA("barcode", "CONTENT", row.sku);
        LODOP.SET_PRINT_STYLEA("qty", "CONTENT", row.qty);
      }
    }
  }

  public DoPrint(printData: any, encrytmplData: string[]) {
    //变量赋值
    let code = printData.code;
    let LODOP = getLodop();
    LODOP.PRINT_INIT("单据打印测试")
    LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");
    let datas = this.getPrintData(encrytmplData);
    this.PrintOne(printData, datas);
    LODOP.PREVIEW();
  }
}
