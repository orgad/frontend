import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TmplService } from 'src/app/tmpl/services/tmpl.service';
declare var getLodop: any;

@Component({
  selector: 'print-tmpl-edit-detail-data',
  templateUrl: './print-tmpl-edit-detail-data.component.html',
  styleUrls: ['./print-tmpl-edit-detail-data.component.css']
})
export class PrintTmplEditDetailDataComponent implements OnInit {

  @Input() editDataFormVisible: boolean;
  @Input() id: number;
  @Input() data: string;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;

  LODOP: any;

  constructor(private fb: FormBuilder, private tmplService: TmplService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    
  }

  initAddForm(): void {
    this.validateForm.addControl("tmplData", new FormControl('', Validators.required));
  }

  showData()
  {
    this.validateForm.controls["tmplData"].setValue(this.data);
  }

  handleOk(): void {

    let tmplData = this.validateForm.controls["tmplData"].value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a == "INVALID") {
        checkStatus = false;
      }
    }

    if (checkStatus == true)
      this.setTmplData(tmplData);
  }

  doEdit() {
    this.print(this.data);
  }

  print(tmpldata: string) {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INITA(0, 0, 665, 600, "打印控件功能演示_Lodop功能_演示文档式模板生成和使用");
    let code = "1234567";
    eval(tmpldata);
    this.LODOP.PRINT_DESIGN();
  }

  private setTmplData(data: string) {
    //对data进行加密
    let encryData = this.tmplService.stringToBase64(data);
    this.tmplService.updateTmplData(this.id, encryData)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  doOK(flag: boolean): void {
    this.resetForm();
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }

}
