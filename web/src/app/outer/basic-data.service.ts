import { Injectable } from '@angular/core';
import { WhService } from './wh/wh.service';
import { CustService } from './cust/cust.service';
import { Observable } from 'rxjs';
import { SupplierService } from './supplier/supplier.service';

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor(private whService: WhService, private custService: CustService,private supplierService:SupplierService) { }

  public getWhList(): Observable<BasicDataModelResult> {
    return this.whService.getWarehouse();
  }

  public getCustList(): Observable<BasicDataModelResult> {
    return this.custService.getCustList();
  }

  public getCourierList(): Observable<BasicDataModelResult> {
    return this.supplierService.getCourierList();
}

  public getBrandList(custId: string): Observable<BasicDataModelResult> {
    return this.custService.getBrandList(custId);
  }

  public getShopList(custId: string): Observable<BasicDataModelResult> {
    if (custId != null)
      return this.custService.getShopList(custId);
  }

}
