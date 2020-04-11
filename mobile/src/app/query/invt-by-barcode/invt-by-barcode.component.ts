import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-invt-by-barcode',
  templateUrl: './invt-by-barcode.component.html',
  styleUrls: ['./invt-by-barcode.component.css']
})
export class InvtByBarcodeComponent implements OnInit {

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
        barcode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }

  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    this.invtService.getByBarcodeList(barcode).subscribe(r => {
      this.list = r;
    }
    );
  }
}
