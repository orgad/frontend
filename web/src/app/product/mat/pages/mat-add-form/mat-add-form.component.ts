import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatService } from '../../services/mat.service';

@Component({
  selector: 'mat-add-form',
  templateUrl: './mat-add-form.component.html',
  styleUrls: ['./mat-add-form.component.css']
})
export class MatAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  prods: BasicData[];
  mat: Mat = {
    id: 0, code: "", name: "", barcode: "", catlvl1: "", catlvl2: "", catlvl3: "", spec: "",
    puom: "", auom: "", ptoa: 0, x: 0, xunit: "", y: 0, yunit: "", z: 0, zunit: "", comment: "",
    createdby: "", createdtime: null, lastmodifiedby: "", lastmodifiedtime: null
  };

  constructor(private fb: FormBuilder, private matService: MatService) {
    this.validateForm = this.fb.group(["validateForm"]);
  }

  ngOnInit() {
    this.initAddForm();
 
  }

  initAddForm(): void {
    this.validateForm.addControl("mat.code", new FormControl('', Validators.required));
    this.validateForm.addControl("mat.name", new FormControl('', Validators.required));
    this.validateForm.addControl("mat.barcode", new FormControl('', Validators.required));

    this.validateForm.addControl("mat.comment", new FormControl());
  }

  

  handleOk(): void {
    //获取参数
    this.mat.code = this.validateForm.controls["mat.code"].value;
    this.mat.name = this.validateForm.controls["mat.name"].value;
    this.mat.barcode = this.validateForm.controls["mat.barcode"].value;
    this.mat.comment = this.validateForm.controls["mat.comment"].value;

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
      this.setMat(this.mat);
  }

  private setMat(mat: Mat): void {
    this.matService.setMat(mat)
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
