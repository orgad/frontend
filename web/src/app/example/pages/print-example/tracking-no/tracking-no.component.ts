import { Component, OnInit } from '@angular/core';
declare var getLodop: any;

@Component({
  selector: 'app-tracking-no',
  templateUrl: './tracking-no.component.html',
  styleUrls: ['./tracking-no.component.css']
})
export class TrackingNoComponent implements OnInit {

  LODOP: any;

  constructor() { }

  ngOnInit() {
  }

  public PrintSample() {
    this.LODOP = getLodop();

    /*PRINT_INIT(strPrintTaskName)打印初始化 */
    this.LODOP.PRINT_INIT("顺丰面单")

    /*SET_PRINT_PAGESIZE(intOrient,intPageWidth,intPageHeight,strPageName)设定纸张大小 */
    /*顺丰打印区域是 100mm*160mm,预留边距要>5m(左右各5mm,上下各10mm),所以文档区域为 110mm*170mm */

    this.LODOP.SET_PRINT_PAGESIZE(1, '110mm', '180mm', "");

    //top, 10mm开始;left,5mm开始

    //顺丰一共12个区域
    //开始画横线  top,left, 

    let topOff = 0, leftOff = 0;
    let width = 100, height = 150;

    var linHeights: any[] = [0, 12, 7 + 16, 10, 10, 9, 11, 7, 8, 18, 10, 12, 10];
    var lines = [{ startTop: topOff, startLeft: leftOff, endTop: topOff, endLeft: width + leftOff }];

    for (let i = 1; i < linHeights.length; i++) {
      lines.push({
        startTop: lines[i - 1].startTop + linHeights[i],
        startLeft: lines[i - 1].startLeft,
        endTop: lines[i - 1].startTop + linHeights[i],
        endLeft: lines[i - 1].endLeft
      });
    }

    //开始划线横条
    for (let i = 0; i < lines.length; i++) {
      this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm',
        lines[i].startLeft + 'mm',
        lines[i].endTop + 'mm',
        lines[i].endLeft + 'mm', 0, 1); //起始位置
    }

    this.LODOP.ADD_PRINT_LINE(lines[0].startTop + height + 'mm',
      lines[0].startLeft + 'mm',
      lines[0].endTop + height + 'mm',
      lines[0].endLeft  + 'mm', 0, 1); //最后一条

    //开始划线竖条
    this.LODOP.ADD_PRINT_LINE(lines[0].startTop + 'mm', lines[0].startLeft + 'mm', lines[0].startTop + 150 + 'mm', lines[0].startLeft + 'mm', 0, 1); //左边
    this.LODOP.ADD_PRINT_LINE(lines[0].startTop + 'mm', lines[0].endLeft + 'mm', lines[0].startTop + 150 + 'mm', lines[0].endLeft + 'mm', 0, 1); //右边


    let i = 0;
    this.LODOP.ADD_PRINT_IMAGE(2.5 + 'mm', 5, 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/logo.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式

    this.LODOP.ADD_PRINT_IMAGE(2.5 + 'mm', 70 + 'mm', 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/hotline.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式

    i++;
    /* ADD_PRINT_BARCODE(Top,Left,Width,Height,BarCodeType,BarCodeValue); */
    this.LODOP.ADD_PRINT_BARCODE(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 5 + 'mm', 55 + 'mm', 20 + 'mm', "128Auto", "123456789");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 60 + 'mm', 40 + 'mm', 7 + 'mm', "顺丰隔日");      //+7
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "Frutiger");
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 55 + 'mm', lines[i].endTop + 7 + 'mm', lines[i].endLeft + 'mm', 0, 1);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 9 + 'mm', lines[i].startLeft + 60 + 'mm', 40 + 'mm', 7 + 'mm', "代收货款");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "Frutiger");

    /* */
    i++;
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "目的地");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "7311BFLK");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    /* */

    i++;
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "收件人");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "VOrient", 3);
    //画一条竖线
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "刘德华 136 0000 0000");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 6 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "广东省深圳市南山区软件产业基地1栋17楼");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    /* */
    i++;

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "寄件人");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "张学友 136 0000 0000");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 6 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "广东省深圳市南山区软件产业基地1栋17楼");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");

    i++;
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "付款方式");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "计费重量");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "标准化包装费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 45 + 'mm', 10 + 'mm', 10 + 'mm', "签单返还");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "月结账号");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "实际重量");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "个性化包装费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 45 + 'mm', 20 + 'mm', 10 + 'mm', "转寄协议客户");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "第三方地区");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "声明价值");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "超长超重附件费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "费用合计");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "保价费用");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 30 + 'mm', 10 + 'mm', 10 + 'mm', "易碎件");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    i++;
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "托寄物");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "VOrient", 3);
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "衣服");
    //this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 2);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "特安服务");
    //this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 2);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 4 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "自寄自取");
    //this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 2);

    i++; //7

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "备注");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "VOrient", 3);
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');


    i++;//8
    this.LODOP.ADD_PRINT_IMAGE(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 2 + 'mm', 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/logo.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式

    this.LODOP.ADD_PRINT_IMAGE(lines[i].startTop + 9 + 'mm', lines[i].startLeft + 2 + 'mm', 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/hotline.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式

    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 25 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 25 + 'mm');

    this.LODOP.ADD_PRINT_BARCODE(lines[i].startTop + 4 + 'mm', lines[i].startLeft + 30 + 'mm', 70 + 'mm', 10 + 'mm', '128Auto', "子单号 123456789");

    i++;//9
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "收件人");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.SET_PRINT_STYLEA(0, "VOrient", 3);
    //画一条竖线
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "刘德华 136 0000 0000");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 6 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "广东省深圳市南山区软件产业基地1栋17楼");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");

    /* */
    i++;
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 2 + 'mm', lines[i].startLeft + 2 + 'mm', 2 + 'mm', 10 + 'mm', "寄件人");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_LINE(lines[i].startTop + 'mm', lines[i].startLeft + 5 + 'mm', lines[i + 1].startTop + 'mm', lines[i].startLeft + 5 + 'mm');
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "张学友 136 0000 0000");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 6 + 'mm', lines[i].startLeft + 20 + 'mm', 80 + 'mm', 10 + 'mm', "广东省深圳市南山区软件产业基地1栋17楼");
    this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");

    i++;//11
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "付款方式");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "计费重量");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "标准化包装费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 1 + 'mm', lines[i].startLeft + 45 + 'mm', 10 + 'mm', 10 + 'mm', "签单返还");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "月结账号");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "实际重量");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "个性化包装费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 3 + 'mm', lines[i].startLeft + 45 + 'mm', 20 + 'mm', 10 + 'mm', "转寄协议客户");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "第三方地区");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "声明价值");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 5 + 'mm', lines[i].startLeft + 30 + 'mm', 20 + 'mm', 10 + 'mm', "超长超重附件费");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 'mm', 20 + 'mm', 10 + 'mm', "费用合计");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 20 + 'mm', 10 + 'mm', 10 + 'mm', "保价费用");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);
    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 7 + 'mm', lines[i].startLeft + 30 + 'mm', 10 + 'mm', 10 + 'mm', "易碎件");
    this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

    /* */
    i++;//12

    this.LODOP.ADD_PRINT_TEXT(lines[i].startTop + 'mm', lines[i].startLeft + 'mm', 50 + 'mm', 10 + 'mm', "客户自定义内容");
    //this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 1.5);

    this.LODOP.PREVIEW();
  }

}
