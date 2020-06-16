import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';
import { MatService } from '../../services/mat.service';

@Component({
  selector: 'app-mat-take-photo',
  templateUrl: './mat-take-photo.component.html',
  styleUrls: ['./mat-take-photo.component.css']
})
export class MatTakePhotoComponent implements OnInit {

  scanForm: FormGroup;
  files: Array<any> = [];
  id:number;
  code: string;

  srcA: string;
  srcB: string;
  
  constructor(private _location:Location,private route:ActivatedRoute, private _toast: ToastService,
    private matService:MatService) { }

  ngOnInit() {
    this.buildForm();
    this.id = this.route.snapshot.params["id"];
    this.code = this.route.snapshot.queryParams["code"];
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        barcode: new FormControl()
      }
    );
  }

  goBack():void{
    this._location.back();
  }

  onFocus(){

  }

  onReset(){

  }

  onTake(v, e) {
    let file = e.target.files[0];
    this.files.push(file);
    var reader = new FileReader();
    reader.onload = function (e1) {
      let img = document.getElementById(v) as HTMLImageElement;
      img.src = (e1.target as any).result.toString();
    }
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this._toast.info("uploading");
    let barcode = this.scanForm.controls["barcode"].value;
    console.log(this.files);
    //数据上传
    this.matService.Save(this.id,barcode,this.files)
      .subscribe(r => {
        this._toast.info(r.toString());
        this.goBack();
      }
      );
  }

}
