import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';
import { RecheckService } from '../services/recheck.service';

@Component({
  selector: 'app-recheck-scan',
  templateUrl: './recheck-scan.component.html',
  styleUrls: ['./recheck-scan.component.css']
})
export class RecheckScanComponent implements OnInit {

  scanForm: FormGroup;
  rechekId: string;
  code:string;
  Message:string;

  canEditable: boolean;
  cartonFocus = { focus: true, date: new Date() };
  barcodeFocus = { focus: true, date: new Date() };

  onFocusChange() {
    this.canEditable = false;
    setTimeout(() => { this.canEditable = true; }, 200);
  }

  constructor(private recheckService: RecheckService,
    private route: ActivatedRoute,
    private toastService:ToastService,
    private _location:Location) { }

  ngOnInit() {
    this.buildForm();
    this.rechekId = this.route.snapshot.params["id"];
    this.code = this.route.snapshot.queryParams["code"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl()
      }
    );
  }

  goBack():void{
    this._location.back();
  }
   
  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    this.recheckService.saveDetail(this.rechekId, barcode).subscribe(r =>
      {
        console.log(r.message);

        this.Message = barcode + ":"  + r.message;
         
        if(r.allFinished)
        {
          this.toastService.info(barcode + ":" + r.message);
        }  
      });
  }

}
