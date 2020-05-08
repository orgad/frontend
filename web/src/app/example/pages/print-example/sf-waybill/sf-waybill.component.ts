import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/example/services/mock.service';
declare var getLodop: any;

@Component({
  selector: 'app-sf-waybill',
  templateUrl: './sf-waybill.component.html',
  styleUrls: ['./sf-waybill.component.css']
})
export class SfWaybillComponent implements OnInit {
  LODOP: any;
  item: number = 0;
  lines = [{ startTop: 0, startLeft: 0, endTop: 0, endLeft: 0 }];

  constructor(private mockService: MockService) { }

  ngOnInit() {
  }

  PrintSample() {
    this.item = 0;
    this.LODOP = getLodop();
    this.LODOP.PRINT_INITA("0mm", "0mm", "110mm", "150mm", "顺丰面单");
    this.LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", true); //设置为允许使用变量
    // 96*150 --两联单
    this.LODOP.SET_PRINT_PAGESIZE(1, '96mm', '150mm', "");
    // 96*180 --两联单
    // 96*210 --三联单

    this.PrintLine();
    this.PrintText();

    this.LODOP.SET_SHOW_MODE("SHOW_SCALEBAR", true);//显示标尺(需要高级注册)

    this.LODOP.PRINT_DESIGN();
  }

  private PrintLine() {
    let topOff = 0, leftOff = 0;
    let width = 96, height = 150;
    var linHeights: any[] = [0, 15, 22, 28, 26, 11, 26, 22];
    this.lines = [{ startTop: topOff, startLeft: leftOff, endTop: topOff, endLeft: width + leftOff }];

    for (let i = 1; i < linHeights.length; i++) {
      let line = this.lines[i - 1];
      this.lines.push({
        startTop: line.startTop + linHeights[i],
        startLeft: line.startLeft,
        endTop: line.startTop + linHeights[i],
        endLeft: line.endLeft
      });
    }

    //开始划线横条
    for (let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];
      this.LODOP.ADD_PRINT_LINE(line.startTop + 'mm',
        line.startLeft + 'mm',
        line.endTop + 'mm',
        line.endLeft + 'mm', 0, 1); //起始位置
    }

    this.LODOP.ADD_PRINT_LINE(this.lines[0].startTop + height + 'mm',
      this.lines[0].startLeft + 'mm',
      this.lines[0].endTop + height + 'mm',
      this.lines[0].endLeft + 'mm', 0, 1); //最后一条

    //开始划线竖条
    this.LODOP.ADD_PRINT_LINE(this.lines[0].startTop + 'mm', this.lines[0].startLeft + 'mm',
      this.lines[0].startTop + 150 + 'mm', this.lines[0].startLeft + 'mm', 0, 1); //左边
    this.LODOP.ADD_PRINT_LINE(this.lines[0].startTop + 'mm', this.lines[0].endLeft + 'mm',
      this.lines[0].startTop + 150 + 'mm', this.lines[0].endLeft + 'mm', 0, 1); //右边
  }

  private PrintText() {
    this.PrintLogo();
    this.PrintWaybill();
    this.PrintReceiver();
    this.PrintRoute();
    this.PrintSender();
    this.PrintSenderItem();
    this.PrintSenderDetail();
  }

  private PrintLogo() {
    this.LODOP.ADD_PRINT_IMAGE(2.5 + 'mm', 5, 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/logo.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式

    this.LODOP.ADD_PRINT_IMAGE(2.5 + 'mm', 70 + 'mm', 20 + 'mm', 7 + 'mm', "<img border='0' src='assets/logo/hotline.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式
  }

  private PrintWaybill() {
    this.item++;
    let i = this.item;
    let line = this.lines[i];

    /* ADD_PRINT_BARCODE(Top,Left,Width,Height,BarCodeType,BarCodeValue); */
    this.LODOP.ADD_PRINT_BARCODE(line.startTop + 3 + 'mm', line.startLeft + 5 + 'mm', 66 + 'mm', 13 + 'mm', "128Auto", "SF 888 888 888 8888");
    this.LODOP.ADD_PRINT_IMAGE(line.startTop + 1 + 'mm', line.startLeft + 70 + 'mm', 20 + 'mm', 20 + 'mm', "<img border='0' src='assets/logo/logo.png' />");
    this.LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);//(可变形)扩展缩放模式
  }

  private PrintReceiver() {
    this.item++;
    let i = this.item;
    let line = this.lines[i];
    let nextLine = this.lines[i + 1];
    if (line != null) {

      this.LODOP.ADD_PRINT_TEXTA("router", line.startTop + 2 + 'mm', line.startLeft + 2 + 'mm', 70 + 'mm', 14 + 'mm', "755WD-755BF");
      this.LODOP.SET_PRINT_STYLEA("router", "ContentVName", "router");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");
      this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 33);

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 16 + 'mm', line.startLeft + 2 + 'mm', 7 + 'mm', 7 + 'mm', "收");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");
      this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 16 + 'mm', line.startLeft + 7 + 'mm', 70 + 'mm', 5 + 'mm', "熊大 135 **** 6789 顺丰速运有限公司");
      this.LODOP.SET_PRINT_STYLEA(0, "ContentVName", "Receiver");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 20 + 'mm', line.startLeft + 7 + 'mm', 70 + 'mm', 10 + 'mm', "深圳市福田区新洲十一街138号万基商务大厦一楼1101");
      this.LODOP.SET_PRINT_STYLEA(0, "ContentVName", "Receiver_Address");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 16 + 'mm', line.startLeft + 77 + 'mm', 17 + 'mm', 9 + 'mm', "COD");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");
    }
  }

  private PrintRoute() {
    this.item++;
    let i = this.item;
    let line = this.lines[i];
    let nexLine = this.lines[i + 1];
    if (line != null) {
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 2 + 'mm', line.startLeft + 2 + 'mm', 33 + 'mm', 6 + 'mm', "到付22元");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
      this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 5);

      //画横线 6mm*33mm
      this.LODOP.ADD_PRINT_LINE(line.startTop + 6 + 'mm',
        line.startLeft + 'mm',
        line.endTop + 6 + 'mm',
        line.startLeft + 33 + 'mm', 0, 1);

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 8 + 'mm', line.startLeft + 'mm', 33 + 'mm', 20 + 'mm', "A22");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");

      //画竖线  33mm *  26mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 'mm',
        line.startLeft + 33 + 'mm',
        line.endTop + 26 + 'mm',
        line.startLeft + 33 + 'mm', 0, 1);

      //画二维码
      this.LODOP.ADD_PRINT_BARCODE(line.endTop + 0.5 + 'mm',
        line.startLeft + 33 + 4 + 'mm',
        25 + 'mm', 25 + 'mm', "QRCode", "{'k1':'021wg','k2':'021kv','k3':'021','k4':'t4','k5':'sf1021109880796','k6':'','k7':'403d6182'}");

      //画竖线  32mm *  26mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 'mm',
        line.startLeft + 33 + 32 + 'mm',
        line.endTop + 26 + 'mm',
        line.startLeft + 33 + 32 + 'mm', 0, 1);

      //画文本 已验视 10mm * 26mm
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 'mm', line.startLeft + 33 + 32 + 'mm', 10 + 'mm', 26 + 'mm', "已验视");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
      this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
      this.LODOP.SET_PRINT_STYLEA(0, "Bold", 1);

      //画竖线  32mm *  26mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 'mm',
        line.startLeft + 33 + 32 + 10 + 'mm',
        line.endTop + 26 + 'mm',
        line.startLeft + 33 + 32 + 10 + 'mm', 0, 1);

      //画横线 21mm*17mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 17 + 'mm',
        line.startLeft + 33 + 32 + 10 + 'mm',
        line.endTop + 17 + 'mm',
        line.startLeft + 33 + 32 + 10 + 21 + 'mm', 0, 1);
    }
  }

  private PrintSender() {
    this.item++;
    let i = this.item;
    let line = this.lines[i];
    let nexLine = this.lines[i + 1];
    if (line != null) {
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 2 + 'mm', line.startLeft + 2 + 'mm', 7 + 'mm', 7 + 'mm', "寄");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "宋体");
      this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 1 + 'mm', line.startLeft + 7 + 'mm', 70 + 'mm', 5 + 'mm', "熊小二 136 **** 0988");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 6 + 'mm', line.startLeft + 7 + 'mm', 70 + 'mm', 10 + 'mm', "上海市浦东新区世纪大道88号");
      this.LODOP.SET_PRINT_STYLEA(0, "FontName", "汉仪黑体");
    }
  }

  private PrintSenderItem() {
    this.item++;
    let i = this.item;
    let line = this.lines[i];
    if (line != null) {
      this.LODOP.ADD_PRINT_TEXT(line.startTop + 2 + 'mm', line.startLeft + 2 + 'mm', 48 + 'mm', 7 + 'mm', "托寄物");
      //画竖线 48mm * 26mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 13 + 'mm',
        line.startLeft + 48 + 'mm',
        line.endTop + 13 + 'mm',
        line.startLeft + 48 + 48 + 'mm', 0, 1);

      this.LODOP.ADD_PRINT_TEXT(line.startTop + 2 + 'mm', line.startLeft + 48 + 'mm', 48 + 'mm', 7 + 'mm', "增值服务:");

      //画横线 48mm * 13mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 'mm',
        line.startLeft + 48 + 'mm',
        line.endTop + 26 + 'mm',
        line.startLeft + 48 + 'mm', 0, 1);

      this.LODOP.ADD_PRINT_TEXT(line.endTop + 13 + 2 + 'mm', line.startLeft + 48 + 'mm', 24 + 'mm', 7 + 'mm', "计费重量:");
      this.LODOP.ADD_PRINT_TEXT(line.endTop + 13 + 2 + 'mm', line.startLeft + 48 + 24 + 'mm', 24 + 'mm', 7 + 'mm', "实际重量:");
      this.LODOP.ADD_PRINT_TEXT(line.endTop + 13 + 2 + 7 + 'mm', line.startLeft + 48 + 'mm', 24 + 'mm', 7 + 'mm', "费用合计:");
      this.LODOP.ADD_PRINT_TEXT(line.endTop + 13 + 2 + 7 + 'mm', line.startLeft + 48 + 24 + 'mm', 24 + 'mm', 7 + 'mm', "付款方式:");
    }
  }

  private PrintSenderDetail() {
    this.item++;
    let i = this.item;

    let line = this.lines[i];
    if (line != null) {
      this.LODOP.ADD_PRINT_TEXT(line.endTop + 2 + 'mm', line.startLeft + 'mm', 48 + 'mm', 18 + 'mm', "客户自定义区域");

      //画竖线 48mm * 22mm
      this.LODOP.ADD_PRINT_LINE(line.endTop + 'mm',
        line.startLeft + 48 + 'mm',
        line.endTop + 22 + 'mm',
        line.startLeft + 48 + 'mm', 0, 1);

      this.LODOP.ADD_PRINT_TEXT(line.endTop + 2 + 'mm', line.startLeft + 48 + 'mm', 48 + 'mm', 18 + 'mm', "图标区域");
    }
  }

  public PrintT() {
    //首先获取模板
    this.mockService.getT().subscribe(r => {
      this.PrintDesign(r);
    });
  }

  private PrintDesign(r:any)
  {
    this.LODOP = getLodop();
     let router = "755WD-755BF";
     let Receiver="庞欢";
     let Receiver_Address="金闻路";
     eval(r);
     this.LODOP.PRINT_DESIGN();
  }
}
