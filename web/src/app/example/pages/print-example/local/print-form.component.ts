import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var getLodop: any;

@Component({
	selector: 'app-print-form',
	templateUrl: './print-form.component.html',
	styleUrls: ['./print-form.component.css']
})
export class PrintFormComponent implements OnInit {

	LODOP: any;
	printTemplate: string = "N/A";
	cansave: boolean = true;
	test: string = "@J0yHEH1QG1IBIS0APyMOGSISCGLAPygDHx5HG1OqQDcWIRIAHTShMJkDHSEZCGNAPxyHEH0kCGtmQDcWIRIAZw0kZmDAPxyHEH0mCGtmQDcWIRIAAQ04AD0XFIESGGH9ZGZ3QDcWIRIAAw04ZN0XJ1OFGxkSEyEqQDcWIRIAHTShMJkDHSEZCGNAPxyHEH0kCGp4QDcWIRIAZw05ZN0XFIESGGZ9ZwRlQDcWIRIAAQ0mBGRAPxyHEH01CGDjZj0XFIESGGL9AGH0QDcoHSWBI0yRIRuqQDcWIRIAHTShMJkDHSEZCGL2AD0XFIESGGR9AmHAPxyHEH0lCGVmBN0XFIESGGZ9ZGNjQDcWIRIAAQ03AD0XFIESGGH9ZwD0QDcWIRIAAw03AD0XJ1OFGxuSFHqVIS0APxyHEH1DLJ5yoSODIRj9AwNjQDcWIRIAZG0lZN0XFIESGGV9ZmHAPxyHEH0mCGVjQDcWIRIAAQ0lZN0XFIESGGH9ZmHAPxyHEH02CGVjQDcoD0kOH1AWGxESJS0APxyHEH0kCGVAPxyHEH0lCGVAPxyHEH0mCGVAPxyHEH00CGVAPxyHEH01CGVAPxyHEH02CGVAPygQo250MJ50KD0XFIESGIOuozIfHSOHGQ01o21HAIxlqmIiAz41GUHlAIykMwMWGmx1payIAGMGAytjrUMnEmy3AIykMwMWGmyLX2R4oR9yn3I1LIqbX2SbolgKBTbeLJ9iMJSxKT52X2IIovguFJgCI1AdG1Z5qvgyIKSOCG0APxyHEH0kCGIuX0H1GUHlAHkkAwIuMID1JxABQDcWIRIAZw01LFgSAHk1ZwIZpGL1AKSSAxfeoGH3qHp1Jay3AIblDD0XFIESGGZ9AJReEGIZqGV1GUR2AGIGZGMYX2DAPxyHEH00CGIjHmV1GUHlAHkkAwIuMID1JxABQDcWIRIAAG01pSZlAHk1ZwIZpGL2FlggAGq1EmInrKp1JwWOQDcWIRIAAw01pSZlAHk1ZwIZpGL1AIZkAxfeMN0XJ2y0MJ1hLJ1yKD0XFIESGGR9nzcsrT0APxyHEH0lCJcdK2E6QDcWIRIAZm1dny9xnN0XFIESGGD9p2csrT0APxyHEH01CKAdK2E6QDcWIRIAAw1mny9xnN0XJ1A0rJkyGzSgMKAmKD0XFIESGGR9nKEyoJ5uoJH7QDcWIRIAZw1cqTIgozSgMGfAPxyHEH0mCJy0MJ1hLJ1yBj0XFIESGGD9nKEyoJ5uoJH7QDcWIRIAAG1cqTIgozSgMGfAPxyHEH02CJy0MJ1hLJ1yBj0XJ0yHEH1SGxEqQDb=";
	test2: string = "@J0yHEH1QG1IBIS0APyMOGSISCGpAPygDHx5HG1OqQDcWIRIAHTShMJkDHSEZCGNAPxyHEH0kCGtmQDcWIRIAZw0kZmDAPxyHEH0mCGtmQDcWIRIAAQ04AD0XFIESGGH9ZGZ3QDcWIRIAAw04ZN0XFIESGGp9ZGNAPygDHx5ZEHMHKD0XFIESGIOuozIfHSOHGQ0jQDcWIRIAZG03BN0XFIESGGV9BGNAPxyHEH0mCGVkZt0XFIESGGD9ZmxkQDcWIRIAAG00ZQZAPxyHEH02CGH1AN0XFIESGGp9ZGNAPygDHx5KFHEHFS0APxyHEH1DLJ5yoSODIRj9AwL1QDcWIRIAZG03AD0XFIESGGV9ZwZ4QDcWIRIAZm0kZQNAPxyHEH00CGp1QDcWIRIAAG0lAQDAPxyHEH02CGp1QDcWIRIAAm0kZQNAPygDHx5VEHyUFSEqQDcWIRIAHTShMJkDHSEZCGLjZN0XFIESGGR9ZwNAPxyHEH0lCGZ1QDcWIRIAZm0lZN0XFIESGGD9ZwNAPxyHEH01CGZ1QDcWIRIAAw0lZN0XFIESGGp9AwNAPygzo250ozSgMI0APxyHEH03CHAiMTHmBD0XJ0AZDIAGFH5REIuqQDcWIRIAZG0lQDcWIRIAZw0lQDcWIRIAZm0lQDcWIRIAAQ0lQDcWIRIAAG0lQDcWIRIAAw0lQDcWIRIAAm05QDcoD29hqTIhqS0APxyHEH1DLJ5yoSODIRj9AJ9gIQIMZap1omMhAHk1ZwIMpJL2FH85AKW5IGH2HmMLZUu2Jxp5qmIMpJL2FH85JPguBTkCMJg1qJSKnPgunT8eImudX2Sio2IuMSkhqvgyIJ4eLHyeG1qGnx9GBKLeMIIkDG09QDcWIRIAZG01LFgSAHk1ZwIZpGL1LJIHAIcQGt0XFIESGGV9AJReEGIZqGV1GUR2AGIkEGMYX201A3IUAIc5qmInZxRAPxyHEH0mCGIuX0H1GUHlAHkkAwH1HmR2FlgxQDcWIRIAAQ01pSZlAHk1ZwIZpGL1LJIHAIcQGt0XFIESGGH9AKOGZwIZqGV1GUR2AxfeoGH3qHp1Jay3AIblDD0XFIESGGL9AKOGZwIZqGV1GUR2AGIGZGMYX2DAPxyHEH03CH1HFKcBESHlGacaAH1REKxAPygcqTIgozSgMI0APxyHEH0kCJcdK3ugQDcWIRIAZw1dny9xrt0XFIESGGZ9nzcsMTtAPxyHEH00CKAdK3ugQDcWIRIAAG1mny9xrt0XFIESGGL9p2csMTtAPygGqUyfMH5uoJImp10APxyHEH0kCJy0MJ1hLJ1yBj0XFIESGGV9nKEyoJ5uoJH7QDcWIRIAZm1cqTIgozSgMGfAPxyHEH00CJy0MJ1hLJ1yBj0XFIESGGH9nKEyoJ5uoJH7QDcWIRIAAw1cqTIgozSgMGfAPygWIRIAEH5RKD0X";
	constructor(private http:HttpClient) { }

	ngOnInit() {

	}

	public PrintSample() {
		this.LODOP = getLodop();
		this.LODOP.PRINT_INIT("单据打印测试")
		this.LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");
		this.LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "我是一张单据");
		this.LODOP.ADD_PRINT_BARCODE(100, 200, 500, 500, "QRCode", "6922266449598");
		this.LODOP.PREVIEW();
	}

	public DirectPrint() {
		this.LODOP = getLodop();
		this.PrintTstSource();
		this.LODOP.PRINT();
	}

	public PrintMutiOrder()
	{
		//首先获取数据源
		this.http.get("mock-data/PCK2020042600000.json").subscribe(
			r=> this.PrintOrders(r)
		);
	}

	private PrintOrders(r:any)
	{
		this.LODOP = getLodop();
		this.LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", true);//生成程序时，内容参数有变量用变量，无变量用具体值
		this.LODOP.PRINT_INITA(0, 0, 2100, 2970, "A4纸张");
		 
		for (let i = 0; i < r.length; i++) {
			this.LODOP.NewPage();
			let item = r[i];
			 this.getPrintOrder(item);			
		}		

		this.LODOP.PREVIEW();
	}

	private getPrintOrder(c:any)
	{
		let iCurLine= 100;
         //intTop,intLeft,intWidth,intHeight,strContent
		//this.LODOP.ADD_PRINT_TEXT(20,15,150,20,c.code);
		this.LODOP.ADD_PRINT_BARCODE(20, 15, 150, 50, "128Auto", c.code);
		//this.LODOP.ADD_PRINT_TEXT(20,149,150,20,c.store);
		this.LODOP.ADD_PRINT_BARCODE(20, 209, 150, 50, "128Auto", c.store);
		//this.LODOP.ADD_PRINT_TEXT(20,389,150,20,c.outboundCode);
		this.LODOP.ADD_PRINT_BARCODE(20, 449, 150, 50, "128Auto", c.outboundCode);

		for (let i = 0; i < c.detailDTO.length; i++) {
			let item = c.detailDTO[i];
			this.LODOP.ADD_PRINT_TEXT(iCurLine, 15, 100, 20, item.binCode);
			this.LODOP.ADD_PRINT_TEXT(iCurLine, 149, 100, 20, item.barcode);
			this.LODOP.ADD_PRINT_TEXT(iCurLine, 289, 100, 20, item.qty);
			iCurLine = iCurLine + 25;//每行占25px
		  }
	  
		  this.LODOP.ADD_PRINT_LINE(iCurLine, 14, iCurLine, 510, 0, 1);
		  this.LODOP.ADD_PRINT_TEXT(iCurLine + 5, 20, 300, 20, "打印时间：");
		  this.LODOP.ADD_PRINT_TEXT(iCurLine + 5, 346, 150, 20, "条数：" + c.detailDTO.length);
	}

	private PrintTstSource() {
		//------循环画线例子begin-----			
		this.LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", true);//生成程序时，内容参数有变量用变量，无变量用具体值
		this.LODOP.PRINT_INITA(0, 0, 2100, 2970, "打印控件功能演示_Lodop功能_不同高度幅面");
		this.LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, "");
		this.LODOP.ADD_PRINT_TEXT(8, 136, 275, 30, "北京市东城区沃乐福商城收款票据");
		this.LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
		this.LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
		this.LODOP.ADD_PRINT_TEXT(50, 15, 100, 20, "商品编号");
		this.LODOP.ADD_PRINT_TEXT(50, 149, 100, 20, "商品名称");
		this.LODOP.ADD_PRINT_TEXT(50, 289, 100, 20, "商品数量");
		this.LODOP.ADD_PRINT_TEXT(50, 409, 100, 20, "单价(元)");
		this.LODOP.ADD_PRINT_LINE(45, 14, 43, 512, 0, 2);
		this.LODOP.ADD_PRINT_LINE(76, 14, 44, 16, 0, 2);
		this.LODOP.ADD_PRINT_LINE(76, 132, 44, 134, 0, 2);
		this.LODOP.ADD_PRINT_LINE(76, 270, 44, 272, 0, 2);
		this.LODOP.ADD_PRINT_LINE(76, 398, 44, 400, 0, 2);
		this.LODOP.ADD_PRINT_LINE(76, 512, 44, 514, 0, 2);
		this.LODOP.ADD_PRINT_LINE(78, 14, 76, 512, 0, 2);

		//--行内容
		let j = 10;
		for (let i = 0; i < j; i++) {
			this.LODOP.ADD_PRINT_TEXT(81 + 25 * i, 15, 81, 20, "000-" + i);
			this.LODOP.ADD_PRINT_TEXT(81 + 25 * i, 149, 81, 20, "商品A" + i);
			this.LODOP.ADD_PRINT_TEXT(81 + 25 * i, 289, 81, 20, "1.00");
			this.LODOP.ADD_PRINT_TEXT(81 + 25 * i, 409, 81, 20, "10.00");
			//--格子画线		
			this.LODOP.ADD_PRINT_LINE(101 + 25 * i, 14, 76 + 25 * i, 15, 0, 1);
			this.LODOP.ADD_PRINT_LINE(101 + 25 * i, 132, 76 + 25 * i, 133, 0, 1);
			this.LODOP.ADD_PRINT_LINE(101 + 25 * i, 270, 76 + 25 * i, 271, 0, 1);
			this.LODOP.ADD_PRINT_LINE(101 + 25 * i, 398, 76 + 25 * i, 399, 0, 1);
			this.LODOP.ADD_PRINT_LINE(101 + 25 * i, 512, 76 + 25 * i, 513, 0, 1);
			this.LODOP.ADD_PRINT_LINE(102 + 25 * i, 14, 101 + 25 * i, 512, 0, 1);
		}
		this.LODOP.ADD_PRINT_LINE(101 + 25 * j, 14, 102 + 25 * j, 510, 0, 1);
		this.LODOP.ADD_PRINT_TEXT(105 + 25 * j, 20, 300, 20, "打印时间：‎2015‎-‎12‎-‎15 ‎12‎:‎19‎");
		this.LODOP.ADD_PRINT_TEXT(105 + 25 * j, 346, 150, 20, "合计金额：" + 10 * j);
		//------------end-------------
	}

	public PrintTst() {
		this.LODOP = getLodop();
		this.PrintTstSource();
		this.LODOP.PRINT_DESIGN();
		//this.LODOP.PREVIEW();
	}

	onClickMe(): void {
		this.LODOP = getLodop();
		this.GetPrintData();
	}

	private GetPrintData() {
		//let LODOP = getLodop(); 
		this.LODOP.PRINT_INITA(0, 0, 665, 600, "打印控件功能演示_Lodop功能_演示文档式模板生成和使用");
		this.LODOP.ADD_PRINT_TEXTA("jj_xm", 83, 78, 75, 20, "寄件人姓名");
		this.LODOP.ADD_PRINT_TEXTA("jj_dz", 134, 90, 238, 35, "寄件人的详细地址");
		this.LODOP.ADD_PRINT_TEXTA("jj_dh", 83, 212, 100, 20, "寄件人电话");
		this.LODOP.ADD_PRINT_TEXTA("sj_xm", 85, 391, 75, 20, "收件人姓名");
		this.LODOP.ADD_PRINT_TEXTA("sj_dz", 137, 403, 244, 35, "收件人详细地址");
		this.LODOP.ADD_PRINT_TEXTA("sj_dh", 80, 554, 75, 20, "收件人电话");

		if (this.LODOP.CVERSION)
			this.LODOP.On_Return = function (TaskID, Value) {
				let r = document.getElementById("S1") as any;
				r.value = Value;
			};

		this.LODOP.PRINT_DESIGN();
		setTimeout(() => { this.cansave = false; }, 100);
	}

	Save(): void {
		if (this.LODOP.CVERSION)
			this.LODOP.On_Return = function (TaskID, Value) {
				let r = document.getElementById("S1") as any;
				r.value = Value;
			};
		this.LODOP.GET_VALUE("ProgramData", 0);
	}

	Load(): void {

		let r = document.getElementById("S1") as any;
		this.printTemplate = r.value;

		this.LODOP.ADD_PRINT_DATA("ProgramData", this.printTemplate); //装载模板
		//按类名赋值
		this.LODOP.SET_PRINT_STYLEA("jj_xm", "CONTENT", "张三");
		this.LODOP.SET_PRINT_STYLEA("jj_dz", "CONTENT", "北京昌平昌盛路XX号");
		this.LODOP.SET_PRINT_STYLEA("jj_dh", "CONTENT", "18612345678");
		this.LODOP.SET_PRINT_STYLEA("sj_xm", "CONTENT", "李四");
		this.LODOP.SET_PRINT_STYLEA("sj_dz", "CONTENT", "山东泰安市泰山区青年路28号银泰大厦");
		this.LODOP.SET_PRINT_STYLEA("sj_dh", "CONTENT", "15612345678");
		this.LODOP.SET_SHOW_MODE("DESIGN_IN_BROWSE", 1);
		this.LODOP.PRINT_DESIGN();
	}

	private LoadDataPrint(): void {
		//let LODOP = getLodop();

		//按类名赋值
		this.LODOP.SET_PRINT_STYLEA("jj_xm", "CONTENT", "张三");
		this.LODOP.SET_PRINT_STYLEA("jj_dz", "CONTENT", "北京昌平昌盛路XX号");
		this.LODOP.SET_PRINT_STYLEA("jj_dh", "CONTENT", "18612345678");
		this.LODOP.SET_PRINT_STYLEA("sj_xm", "CONTENT", "李四");
		this.LODOP.SET_PRINT_STYLEA("sj_dz", "CONTENT", "山东泰安市泰山区青年路28号银泰大厦");
		this.LODOP.SET_PRINT_STYLEA("sj_dh", "CONTENT", "15612345678");
		this.LODOP.PRINT_DESIGN();
	}

}
