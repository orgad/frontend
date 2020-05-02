import { Component, OnInit } from '@angular/core';
import { PickService } from 'src/app/outbound/pick/pick.service';
import { HttpClient } from '@angular/common/http';
declare var getLodop: any;

@Component({
  selector: 'app-cloud-print',
  templateUrl: './cloud-print.component.html',
  styleUrls: ['./cloud-print.component.css']
})
export class CloudPrintComponent implements OnInit {

  Lodop: any;

  constructor(private pickService: PickService,private http:HttpClient) { }

  ngOnInit() {
     
  }

  btnClickPrint(): void {
    this.Lodop = getLodop();

    if (this.Lodop != null) {
      this.Lodop.PRINT_INIT("");

      this.http.get("mock-data/PTA2020042400001.json").subscribe(r => {
        this.printPick(r);
      }
      );;

      /*
      this.pickService.getPrint(1).subscribe(r => {
        this.printPick(r);
      }
      );*/
    }
  }

  private printPick(r: any) {
    this.Lodop.ADD_PRINT_BARCODE(0, 0, 100, 100, "128Auto", r.code);
    this.Lodop.ADD_PRINT_TEXT(100, 0, 260, 39, "打印内容");
    let i: number;
    let iCurLine: number = 150;
    

    for (i = 0; i < r.putawayDetailList.length; i++) {
      let item = r.putawayDetailList[i];
      this.Lodop.ADD_PRINT_TEXT(iCurLine, 15, 100, 20, item.binCode);
      this.Lodop.ADD_PRINT_TEXT(iCurLine, 149, 100, 20, item.barcode);
      this.Lodop.ADD_PRINT_TEXT(iCurLine, 289, 100, 20, item.qty);
      iCurLine = iCurLine + 25;//每行占25px
    }

    this.Lodop.ADD_PRINT_LINE(iCurLine, 14, iCurLine, 510, 0, 1);
    this.Lodop.ADD_PRINT_TEXT(iCurLine + 5, 20, 300, 20, "打印时间：");
    this.Lodop.ADD_PRINT_TEXT(iCurLine + 5, 346, 150, 20, "条数：" + r.putawayDetailList.length);

    this.Lodop.PREVIEW();
  }
}
