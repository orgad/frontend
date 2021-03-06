import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { RepService } from '../../services/rep.service';

@Component({
  selector: 'rep-add-form',
  templateUrl: './rep-add-form.component.html',
  styleUrls: ['./rep-add-form.component.css']
})
export class RepAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];

  listOfOption: [{ id: number, code: string, name: string }];
  rep: RepAdd = {
    whId: 0, comment:""
  };

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService,
    private repService: RepService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
    this.getBasicDatas();
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

  initAddForm(): void {
    this.validateForm.addControl("rep.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("rep.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
  }

  handleOk(): void {
    //获取参数
    this.rep.whId = this.validateForm.controls["rep.whId"].value;
    this.rep.comment = this.validateForm.controls["rep.comment"].value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let checkStatus = true;
    for (const i in this.validateForm.controls) {
      let a = this.validateForm.controls[i].status;
      if (a != "VALID") {
        checkStatus = false;
      }
    }

    if (checkStatus == true)
      this.setRep(this.rep);
  }

  private setRep(rep: RepAdd): void {
    this.repService.setRep(rep)
      .subscribe(item => {
        this.doOK(item != null);
      });
  }

}
