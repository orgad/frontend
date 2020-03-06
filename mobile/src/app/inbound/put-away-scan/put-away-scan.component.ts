import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PaService } from '../services/pa.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-put-away-scan',
  templateUrl: './put-away-scan.component.html',
  styleUrls: ['./put-away-scan.component.css']
})
export class PutAwayScanComponent implements OnInit {

  code:string;
  scanForm: FormGroup;
  inboundId: string;
  id:string;

  onFocus: object = {
    focus: false
  };

  constructor(private paService: PaService,private _location:Location,
    private toastService: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildForm();
    this.id = this.route.snapshot.params["id"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl(),
        binCode:new FormControl()
      }
    );
  }

  onSubmit(): void {
    let carton = this.scanForm.controls["carton"].value;
    let barcode = this.scanForm.controls["barcode"].value;
    let binCode = this.scanForm.controls["binCode"].value;
    this.paService.saveDetail(this.id,carton, barcode,binCode).subscribe(r =>
      {
        console.log(r);
        this.toastService.info(r.toString());
      }
    )
  }

  goBack():void{
    this._location.back();
  }

}
