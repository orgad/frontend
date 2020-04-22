import { Injectable } from '@angular/core';
import { WhService } from './wh/wh.service';
import { CustService } from './cust/cust.service';
import { Observable } from 'rxjs';
import { SupplierService } from './supplier/supplier.service';
import { SkuService } from '../product/sku/services/sku.service';
import { ZoneService } from '../warehouse/wh-zone/services/zone.service';
import { OuterDutyService } from './wh/outer-duty.service';
import { OuterZoneService } from './wh/outer-zone.service';

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor(private whService: WhService, private custService: CustService, private supplierService: SupplierService,
    private skuService: SkuService, private zoneService: OuterZoneService, private dutyService: OuterDutyService) { }

  public getWhList(): Observable<BasicDataModelResult> {
    return this.whService.getWarehouse();
  }

  public getZoneList(): Observable<BasicDataModelResult> {
    return this.zoneService.getList();
  }

  public getDutyList(): Observable<BasicDataModelResult> {
    return this.dutyService.getList();
  }

  public getCustList(): Observable<BasicDataModelResult> {
    return this.custService.getCustList();
  }

  public getCourierList(): Observable<BasicDataModelResult> {
    return this.supplierService.getCourierList();
  }

  public getBrandAll(): Observable<BasicDataModelResult> {
    return this.custService.getBrandAll();
  }

  public getBrandList(custId: string): Observable<BasicDataModelResult> {
    return this.custService.getBrandList(custId);
  }

  public getShopList(custId: string): Observable<BasicDataModelResult> {
    if (custId != null)
      return this.custService.getShopList(custId);
  }

}
