import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { ExpressService } from '../../services/express.service';

@Component({
  selector: 'express-add-form',
  templateUrl: './express-add-form.component.html',
  styleUrls: ['./express-add-form.component.css']
})
export class ExpressAddFormComponent implements OnInit {

  @Input() formVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  courierList: BasicData[];
  express: ExpressAdd = { outboundCode: "", courier: "", code: "" };

  constructor(private fb: FormBuilder,
    private basicDataService: BasicDataService,
    private expressService: ExpressService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
  }

  initAddForm(): void {
    this.validateForm.addControl("express.outboundCode", new FormControl());
    this.validateForm.addControl("express.courier", new FormControl());
    this.validateForm.addControl("express.code", new FormControl());
  }

  getBasicDatas(): void {
    //查询快递公司信息
    this.basicDataService.getCourierList().subscribe(
      r => this.courierList = r.data
    );
  }

  handleOk(): void {
    this.express.outboundCode = this.validateForm.controls["express.outboundCode"].value;
    this.express.courier = this.validateForm.controls["express.courier"].value;
    this.express.code = this.validateForm.controls["express.code"].value;
    this.setExpress(this.express);
  }

  private setExpress(express: ExpressAdd): void {
    this.expressService.addExpress(express)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

  doOK(flag: boolean): void {
    this.visibleChangeBack.emit(!flag);
  }

  handleCancel(): void {
    this.visibleChangeBack.emit(false);
  }
}
