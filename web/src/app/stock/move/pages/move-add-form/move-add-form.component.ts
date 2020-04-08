import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BasicDataService } from 'src/app/outer/basic-data.service';
import { ZoneService } from 'src/app/warehouse/wh-zone/services/zone.service';
import { BinService } from 'src/app/warehouse/wh-bin/services/bin.service';
import { MoveService } from '../../services/move.service';
import { SkuService } from 'src/app/product/sku/services/sku.service';

@Component({
  selector: 'move-add-form',
  templateUrl: './move-add-form.component.html',
  styleUrls: ['./move-add-form.component.css']
})
export class MoveAddFormComponent implements OnInit {

  @Input() addFormVisible: boolean;
  @Output() visibleChangeBack = new EventEmitter();

  validateForm: FormGroup;
  whs: BasicData[];
  zones: ZoneModel[];
  frombins: BinModel[];
  tobins: BinModel[];

  listOfOption: [{ id: number, code: string, name: string }];
  move: MoveAddForm = {
    whId: 0, fromZoneId: 0, fromZoneCode: "", fromBinId: 0, fromBinCode: "",
    toZoneId: 0, toZoneCode: "", toBinId: 0, toBinCode: "",
    carton: "", sku: "", barcode: "", qty: 0
  };

  constructor(private fb: FormBuilder, private basicDataService: BasicDataService,
    private zoneService: ZoneService,
    private binService: BinService,
    private skuService: SkuService,
    private moveService: MoveService) {
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
    this.validateForm.addControl("move.whId", new FormControl('', Validators.required));
    this.validateForm.addControl("move.fromZone", new FormControl('', Validators.required));
    this.validateForm.addControl("move.fromBin", new FormControl('', Validators.required));
    this.validateForm.addControl("move.toZone", new FormControl('', Validators.required));
    this.validateForm.addControl("move.toBin", new FormControl('', Validators.required));
    this.validateForm.addControl("move.carton", new FormControl());
    this.validateForm.addControl("move.sku", new FormControl('', Validators.required));
    this.validateForm.addControl("move.barcode", new FormControl('', Validators.required));
    this.validateForm.addControl("move.qty", new FormControl('', Validators.required));
    //this.validateForm.addControl("move.comment", new FormControl());
  }

  getBasicDatas(): void {
    this.basicDataService.getWhList().subscribe(
      result => this.whs = result.data
    );
    this.zoneService.getList().subscribe(
      result => {
        this.zones = result.data;
      }
    );
  }

  onChange1(value) {
    this.validateForm.controls["move.fromBin"].setValue(null);
    this.move.fromZoneCode = this.zones.find(x => x.id == value).code;
    this.getBinByZone("from", value);
  }

  onfromBinChange(value) {
    if (this.frombins.length > 0)
      this.move.fromBinCode = this.frombins.find(x => x.id == value).code;
  }

  onChange2(value) {
    this.validateForm.controls["move.toBin"].setValue(null);
    this.move.toZoneCode = this.zones.find(x => x.id == value).code;
    this.getBinByZone("to", value);
  }

  ontoBinChange(value) {
    if (this.tobins.length > 0)
      this.move.toBinCode = this.tobins.find(x => x.id == value).code;
  }

  getBinByZone(type: string, zoneId: string) {
    this.binService.getBinListByZone(zoneId).subscribe(
      result => {
        if (type == "from")
          this.frombins = result.data;
        if (type == "to")
          this.tobins = result.data;
      }
    );
  }

  handleOk(): void {
    //获取参数
    this.move.whId = this.validateForm.controls["move.whId"].value;

    let fromZone = this.validateForm.controls["move.fromZone"] as any;
    this.move.fromZoneId = fromZone.value;
    this.move.fromBinId = this.validateForm.controls["move.fromBin"].value;
    this.move.toZoneId = this.validateForm.controls["move.toZone"].value;
    this.move.toBinId = this.validateForm.controls["move.toBin"].value;
    this.move.carton = this.validateForm.controls["move.carton"].value;
    this.move.sku = this.validateForm.controls["move.sku"].value;
    this.move.barcode = this.validateForm.controls["move.barcode"].value;
    this.move.qty = this.validateForm.controls["move.qty"].value;

    //this.move.comment = this.validateForm.controls["stockCheck.comment"].value;

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
      this.setMove(this.move);
  }

  private setMove(move: MoveAddForm): void {
    this.moveService.create(move)
      .subscribe(item => {
        this.doOK(item != null);
      });

  }

}
