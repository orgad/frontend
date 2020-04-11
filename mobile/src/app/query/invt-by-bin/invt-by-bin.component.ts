import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-invt-by-bin',
  templateUrl: './invt-by-bin.component.html',
  styleUrls: ['./invt-by-bin.component.css']
})
export class InvtByBinComponent implements OnInit {

  scanForm: FormGroup;
  list: QueryInvtModel[];

  onFocus: object = {
    focus: false
  };

  constructor(private invtService: InventoryService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private _location: Location) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        binCode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit(): void {
    let binCode = this.scanForm.controls["binCode"].value;
    this.invtService.getByBinCodeList(binCode).subscribe(r => {
      this.list = r;
    }
    );
  }

}
