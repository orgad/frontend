import { Component, OnInit } from '@angular/core';
import { TmplService } from 'src/app/tmpl/services/tmpl.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var getLodop: any;

@Component({
  selector: 'app-print-tmpl-details',
  templateUrl: './print-tmpl-details.component.html',
  styleUrls: ['./print-tmpl-details.component.css']
})
export class PrintTmplDetailsComponent implements OnInit {

  tmpl: PrintTmplModel;
  list: PrintTmplDetail[];
  id: number;
  detailId:number;
  dataForm: FormGroup;
  isEditVisible:boolean;
  LODOP: any;
  data:string;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private tmplService: TmplService) {
    this.dataForm = this.fb.group(["dataForm"]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getDetails();
  }

  showTmpl(id:number)
  {
    //查询模板,然后弹出预览
    this.tmplService.getTmplById(id).subscribe(
      x => {
        var encryData = x;
        var data = this.tmplService.base64ToString(encryData);
        this.preview(data);
      }
    );
  }

  editTmpl(id: number) {
    //查询模板,然后弹出编辑框
    //编辑框是一个弹出文本,在编辑框里面可以修改模板
    this.tmplService.getTmplById(id).subscribe(
      x => {
        var encryData = x;
        this.detailId = id;
        this.data = this.tmplService.base64ToString(encryData);
        this.isEditVisible = true;
      }
    );
  }

  preview(tmpldata: string) {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INITA(0, 0, 665, 600, "打印控件功能演示_Lodop功能_演示文档式模板生成和使用");
    let code="1234567";
    eval(tmpldata);
    this.LODOP.PREVIEW();
  }

  doRefresh(){
    this.getDetails();
  }

  getDetails() {
    this.tmplService.getDetails(this.id).subscribe(
      r => {
        this.tmpl = r.tmpl;
        this.list = r.detailList;
      }
    );
  }

  visibleChangeE(value)
  {
    this.isEditVisible = value;
  }

}
