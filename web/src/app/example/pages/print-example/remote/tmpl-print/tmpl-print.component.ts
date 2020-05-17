import { Component, OnInit } from '@angular/core';
import { TmplService } from 'src/app/tmpl/services/tmpl.service';
declare var getLodop: any;

@Component({
  selector: 'app-tmpl-print',
  templateUrl: './tmpl-print.component.html',
  styleUrls: ['./tmpl-print.component.css']
})
export class TmplPrintComponent implements OnInit {

  obj: any;
  LODOP: any;
  datas: any = "";
  encrydata = "";
  decrydata = "";
  constructor(private tmplService: TmplService) {

  }

  ngOnInit() {
    this.obj = this;
  }

  public PrintSample() {
    this.tmplService.getTmpl().subscribe(
      x => {
        var data = this.tmplService.base64ToString(x[0]);
        this.DoPrint("", data);
      }
    )
  }

  doa() {
    let r = document.getElementById("S1") as any;
    this.decrydata = r.value;
    console.log(this.decrydata, "doa1");
    //加密
    this.encrydata = this.tmplService.stringToBase64(r.value);
    console.log(this.encrydata, "doa2");
  }

  dob() {
    //解密
    let r = document.getElementById("S2") as any;
    this.encrydata = r.value;
    //console.log(this.encrydata,"dob1");
    this.decrydata = this.tmplService.base64ToString(r.value);
    //console.log(this.decrydata,"dob2");
  }

  Data() {
    /*
    this.LODOP.ADD_PRINT_TEXTA("jj_xm", 83, 78, 75, 20, "寄件人姓名");
    this.LODOP.ADD_PRINT_TEXTA("jj_dz", 134, 90, 238, 35, "寄件人的详细地址");
    this.LODOP.ADD_PRINT_TEXTA("jj_dh", 83, 212, 100, 20, "寄件人电话");
    this.LODOP.ADD_PRINT_TEXTA("sj_xm", 85, 391, 75, 20, "收件人姓名");
    this.LODOP.ADD_PRINT_TEXTA("sj_dz", 137, 403, 244, 35, "收件人详细地址");
    this.LODOP.ADD_PRINT_TEXTA("sj_dh", 80, 554, 75, 20, "收件人电话");
    this.LODOP.SET_PRINT_STYLEA("jj_xm", "CONTENT", "张三");
    this.LODOP.SET_PRINT_STYLEA("jj_dz", "CONTENT", "北京昌平昌盛路XX号");
    this.LODOP.SET_PRINT_STYLEA("jj_dh", "CONTENT", "18612345678");
    this.LODOP.SET_PRINT_STYLEA("sj_xm", "CONTENT", "李四");
    this.LODOP.SET_PRINT_STYLEA("sj_dz", "CONTENT", "山东泰安市泰山区青年路28号银泰大厦");
    this.LODOP.SET_PRINT_STYLEA("sj_dh", "CONTENT", "15612345678");
    */
  }

  PrintTmplate() {
    this.DoPrint("", this.decrydata);
  }

  private DoPrint(data: string, tmpldata: any) {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INITA(0, 0, 665, 600, "打印控件功能演示_Lodop功能_演示文档式模板生成和使用");
    let code="1234567";
    eval(tmpldata);

    if (this.LODOP.CVERSION)
      this.LODOP.On_Return = function (TaskID, Value) {
        //在这个方法内部,this 是 LODOP本身,不是document
        let r = document.getElementById("S1") as any;
        r.value = Value;

        let r2 = document.getElementById("S2") as any;
        r2.value = btoa(unescape(encodeURIComponent(Value)));
      };

    this.LODOP.PRINT_DESIGN();
  }

  onChange() {
    console.log(111, "a");
  }

  showData(val: any) {
    let r = document.getElementById("S1") as any;
    r.value = val;
  }
}
